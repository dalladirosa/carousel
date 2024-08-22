'use client';

import { login } from '@/actions/login';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CreateAccountForm from '@/modules/download/plans/components/CreateAccountForm';
import Auth from '@/networks';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
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

const SignIn = () => {
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
    onSuccess: () => {
      setStep(STEP.CHECK_EMAIL);
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
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = async (data: Inputs) => {
    if (step === STEP.CHECK_EMAIL) mutateCheck.mutate({ email: data.email });
    else if (step === STEP.EMAIL_EXSIST) {
      const formData = new FormData();
      formData.set('username', data.email);
      formData.set('password', data.password);
      await login(data.email, data.password);
    } else if (step === STEP.EMAIL_NOT_EXSIST)
      mutateSignUp.mutate({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
  };

  return (
    <div className="container flex min-h-[70vh] flex-col sm:items-center sm:justify-center">
      <FormProvider {...methods}>
        <form
          className="mt-8 h-full w-full max-w-screen-sm overflow-hidden sm:mt-0 sm:h-fit sm:rounded-xl sm:border sm:border-gray-300 sm:bg-gray-100"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h1 className="my-4 text-lg font-bold text-gray-900 sm:mx-6">
            Request a password reset
          </h1>
          <div className="flex flex-col gap-3 pb-6 sm:px-6">
            <div>
              <Label
                htmlFor="email"
                className="text-xs text-gray-600"
                data-invalid="false"
              >
                Email
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

          <div className="flex flex-col gap-3 bg-white py-3 sm:flex-row sm:justify-end sm:border-t sm:border-gray-300 sm:px-4">
            {step === STEP.EMAIL_EXSIST && (
              <Link href="/password-reset">
                <Button
                  variant="link"
                  size="default"
                  className="w-full font-bold !no-underline sm:w-fit"
                >
                  Forgot password?
                </Button>
              </Link>
            )}
            <Button type="submit" className="w-full sm:w-fit">
              Continue
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignIn;
