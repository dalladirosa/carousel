import { cn } from '@/lib/utils';
import React, { ComponentProps } from 'react';

type CardProps = {
  title: string;
  imgUrl: string;
  header: string;
  subHeader: React.JSX.Element;
} & ComponentProps<'div'>;

export default function Card({
  title,
  imgUrl,
  header,
  subHeader,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'group overflow-auto rounded-[40px] bg-gradient-to-b from-[#fff] to-[rgba(255,255,255,0)] p-[1px] [box-shadow:0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]',
        className,
      )}
    >
      <div className="h-full w-full rounded-[40px] bg-gray-100">
        <div className="h-full items-center justify-center overflow-hidden rounded-[40px] border-[1.5px] border-white bg-[#FFFFFF99] px-10 py-8">
          <div className="">
            <div className="flex flex-row items-center justify-center gap-1">
              <img src={imgUrl} className="h-8 w-8 object-contain" alt="" />
              <span className="font-bold text-gray-800">{title}</span>
            </div>
            <div className="mb-6 mt-6 text-center transition-all duration-500 group-hover:opacity-0">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                {header}
              </h1>
              <p className="font-normal text-gray-990">{subHeader}</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
