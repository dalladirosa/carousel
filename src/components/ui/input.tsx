import { cn } from '@/lib/utils';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-primary-purple-70 ring-offset-primary-purple-70 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-xs placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:border-[#E3022C] data-[invalid=true]:outline-[#E3022C]',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
