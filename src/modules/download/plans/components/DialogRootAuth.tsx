import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CreateAccountForm from '@/modules/download/plans/components/CreateAccountForm';
import Auth from '@/networks';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const STEP = {
  CHECK_EMAIL: 'CHECK_EMAIL',
  EMAIL_EXSIST: 'EMAIL_EXSIST',
  EMAIL_NOT_EXSIST: 'EMAIL_NOT_EXSIST',
};

type StepType = (typeof STEP)[keyof typeof STEP];

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const DialogRootAuth = () => {
  const router = useRouter();
  const [step, setStep] = React.useState<StepType>('CHECK_EMAIL');

  const methods = useForm<Inputs>();

  const mutateCheck = useMutation({
    mutationFn: async (body: { email: string }) => {
      return await Auth.checkEmail(body);
    },
    onSuccess: (data) => {
      if (!data.exists) setStep(STEP.EMAIL_NOT_EXSIST);
      else setStep(STEP.EMAIL_EXSIST);
    },
  });

  const mutateSignUp = useMutation({
    mutationFn: async (body: {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    }) => {
      return await Auth.signUp(body);
    },
  });

  const mutateSignIn = useMutation({
    mutationFn: async (body: FormData) => {
      return await Auth.signIn(body);
    },
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);

      router.push('/account');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data: Inputs) => {
    if (step === STEP.CHECK_EMAIL) mutateCheck.mutate({ email: data.email });
    else if (step === STEP.EMAIL_EXSIST) {
      const formData = new FormData();
      formData.set('username', data.email);
      formData.set('password', data.password);
      mutateSignIn.mutate(formData);
    } else if (step === STEP.EMAIL_NOT_EXSIST)
      mutateSignUp.mutate({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
  };

  return (
    <DialogContent isShowCloseButton className="bg-gray-100">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogHeader className="px-6 py-3">
            <DialogTitle className="text-lg font-bold text-gray-900">
              Please enter your email address
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-2.5 px-6 pb-6 pt-3">
            <div>
              <Label
                htmlFor="email"
                className="text-xs text-gray-600"
                data-invalid="false"
              >
                Email Address
              </Label>
              <Input
                placeholder="user@example.com"
                type="email"
                data-invalid="false"
                disabled={step === STEP.EMAIL_EXSIST}
                readOnly={step === STEP.EMAIL_EXSIST}
                {...methods.register('email', { required: true })}
              />
              {/*<span className="text-xs text-[#E3022C]">*/}
              {/*  This field cannot be empty*/}
              {/*</span>*/}
            </div>

            {step === STEP.EMAIL_EXSIST && (
              <div>
                <Label htmlFor="password" className="text-xs text-gray-600">
                  Password
                </Label>
                <Input
                  placeholder="Password"
                  type="password"
                  {...methods.register('password', { required: true })}
                />
              </div>
            )}

            {step === STEP.EMAIL_NOT_EXSIST && <CreateAccountForm />}
          </div>

          <DialogFooter className="border-t border-gray-300 bg-white px-4 py-3">
            {step === STEP.EMAIL_EXSIST && (
              <Link href="/password-reset">
                <Button variant="link" className="font-bold">
                  Forgot password?
                </Button>
              </Link>
            )}
            <Button type="submit">Continue</Button>
          </DialogFooter>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default DialogRootAuth;
