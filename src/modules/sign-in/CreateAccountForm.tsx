import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const CreateAccountForm = () => {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <Label htmlFor="firstName" className="text-xs text-gray-600">
          First Name
        </Label>
        <Input
          placeholder="First name"
          type="text"
          {...register('firstName', { required: true })}
        />
      </div>
      <div>
        <Label htmlFor="lastName" className="text-xs text-gray-600">
          Last Name
        </Label>
        <Input
          placeholder="Last name"
          type="Last name"
          {...register('lastName', { required: true })}
        />
      </div>
      <div>
        <Label htmlFor="password" className="text-xs text-gray-600">
          Create password
        </Label>
        <Input
          placeholder="Create password"
          type="password"
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="text-xs text-gray-600">
          Confirm Password
        </Label>
        <Input
          placeholder="Confirm password"
          type="password"
          {...register('confirmPassword', { required: true })}
        />
      </div>
    </>
  );
};

export default CreateAccountForm;
