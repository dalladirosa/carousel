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
import React from 'react';

const DialogRootAuth = () => {
  return (
    <DialogContent isShowCloseButton className="bg-gray-100">
      <DialogHeader className="px-6 py-3">
        <DialogTitle className="text-lg font-bold text-gray-900">
          Please enter your email address
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-y-2.5 px-6 pb-6 pt-3">
        <div>
          <Label
            htmlFor="email"
            className="text-xs text-gray-600"
            data-invalid="true"
          >
            Email Address
          </Label>
          <Input
            placeholder="user@example.com"
            name="email"
            type="text"
            data-invalid="true"
          />
          <span className="text-xs text-[#E3022C]">
            This field cannot be empty
          </span>
        </div>
        <div>
          <Label htmlFor="password" className="text-xs text-gray-600">
            Password
          </Label>
          <Input placeholder="Password" name="password" type="password" />
        </div>
        <div>
          <Label htmlFor="firstName" className="text-xs text-gray-600">
            First Name
          </Label>
          <Input placeholder="First name" name="First name" type="text" />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-xs text-gray-600">
            Last Name
          </Label>
          <Input placeholder="Last name" name="lastName" type="Last name" />
        </div>
        <div>
          <Label htmlFor="password" className="text-xs text-gray-600">
            Create password
          </Label>
          <Input
            placeholder="Create password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword" className="text-xs text-gray-600">
            Confirm Password
          </Label>
          <Input
            placeholder="Confirm password"
            name="Confirm Password"
            type="password"
          />
        </div>
      </div>

      <DialogFooter className="border-t border-gray-300 bg-white px-4 py-3">
        <Button variant="link" className="font-bold">
          Forgot password?
        </Button>
        <Button type="submit">Continue</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogRootAuth;
