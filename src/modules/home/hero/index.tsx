import { Button } from '@/components/ui/button';
import Neon from '@/icons/neon.svg';
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="container flex w-full flex-col items-center">
      <div className="w-full rounded-t-[2.5rem] bg-gradient-to-b from-[#F8F7FF] to-[#FFFFFF] pb-32 pt-32">
        <h1 className="text-center text-7xl font-normal leading-none text-[#111827]	">
          A <b>better</b> way to use <br /> Powerpoint & Excel
        </h1>
        <p className="mt-3 text-center text-lg text-gray-900">
          Get new powers to help you work{' '}
          <b className="text-purple-60">faster</b> & with{' '}
          <b className="text-purple-60">fewer errors</b>
        </p>

        <div className="mt-10 flex flex-row items-center justify-center gap-6">
          <Button
            className="before:contents[''] relative
              gap-2 bg-gradient-to-b from-purple-60 to-purple-70 text-white
              shadow-[0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F,0px_0.89px_1.34px_0px_#FFFFFF99_inset]
              before:absolute before:right-0 before:top-0 before:shadow-[inset_0_0_0_0.8px_linear-gradient(to_bottom,_#fff_53%,_#fff_0%)]
              "
          >
            Download for Windows{' '}
            <Image
              src="/icons/windows.svg"
              width={28}
              height={28}
              alt=""
              className="h-[28px] w-[28px] object-scale-down"
            />
          </Button>

          <div className="to rounded-md bg-gradient-to-b from-gray-600/30 to-gray-500/30 shadow-[0_0_1px_0_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]">
            <Button className="border-0 text-gray-800 " variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>

        <div className="relative flex w-full flex-row items-center justify-evenly">
          <div className="flex flex-row items-center gap-36 pb-32 pt-32">
            <div>
              <p className="font-light">Powering teams at</p>
              <Image
                src="/images/capstone.png"
                alt="capstone"
                width={300}
                height={99}
              />
            </div>
            <div>
              <p className="font-light">Backed by</p>
              <Image
                src="/images/y-combinator.png"
                alt="capstone"
                width={300}
                height={99}
              />
            </div>
          </div>

          <div className="neon absolute top-4 flex w-full flex-row items-center justify-center">
            <Neon />
          </div>
        </div>
      </div>
    </section>
  );
}
