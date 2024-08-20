import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const PasswordReset = () => {
  return (
    <div className="container mx-auto flex flex-1 flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-[420px] rounded-xl border border-gray-300 bg-gray-100">
        <h1 className="mx-6 my-3 text-lg font-bold text-gray-900">
          Request a password reset
        </h1>
        <div className="px-6 py-3">
          <div>
            <Label
              htmlFor="email"
              className="text-xs text-gray-600"
              data-invalid="false"
            >
              Carousel account email address
            </Label>
            <Input
              placeholder="user@example.com"
              name="email"
              type="text"
              data-invalid="false"
            />
          </div>
          <p className="mt-2.5 text-sm text-[#000]">
            If you’re a registered Carousel user, we will send you a password
            reset link.
            <br />
            <br />
            It can take a few minutes to reach your inbox. Be sure to check your
            spam.
          </p>
        </div>
        <div className="flex flex-row justify-center rounded-bl-xl rounded-br-xl border-t border-gray-300 bg-white px-4 py-3">
          <Button type="submit">Send me a link</Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
