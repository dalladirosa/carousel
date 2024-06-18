import { Button } from '@/components/ui/button';
import Neon from '@/icons/Neon';
import Windows from '@/icons/Windows';
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="container flex w-full flex-col items-center px-0 lg:px-8">
      <div className="w-full rounded-t-[2.5rem] bg-gradient-to-b from-[#F8F7FF] to-[#FFFFFF] pb-32 pt-20 lg:pt-32">
        <h1 className="text-center text-3xl font-normal leading-none text-[#111827] lg:text-6xl	">
          Now you can make decks,
          <br /> models, & memos <b className="text-purple-60">5x faster</b>
        </h1>
        <p className="mt-6 text-center text-base text-gray-900 lg:text-xl">
          Carousel is a better way to use <b>PowerPoint</b> & <b>Excel</b>
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 px-6 lg:flex-row lg:gap-6 lg:px-0">
          <Button
            className="before:contents[''] relative w-full gap-2 bg-gradient-to-b
              from-purple-60 to-purple-70 p-3.5 text-white shadow-[0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F,0px_0.89px_1.34px_0px_#FFFFFF99_inset]
              before:absolute
              before:right-0 before:top-0 before:shadow-[inset_0_0_0_0.8px_linear-gradient(to_bottom,_#fff_53%,_#fff_0%)] lg:w-fit
              "
          >
            Download for Windows <Windows width={21} height={21} />
          </Button>

          <div className="to w-full rounded-md bg-gradient-to-b from-gray-600/30 to-gray-500/30 shadow-[0_0_1px_0_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F] lg:w-fit">
            <Button
              className="w-full border-0 p-3.5 text-gray-800 lg:w-fit"
              variant="outline"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-evenly px-6 pt-20 lg:px-0 lg:pt-32">
          <div className="rounded-[24px] border border-purple-15 px-10 py-4 shadow-[0px_6px_6px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] ring-1 ring-black-30 ring-offset-4">
            <p className="text-black mb-6 text-center text-lg font-bold">
              Powering teams at
            </p>
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-36">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/capstone.png"
                  alt="capstone"
                  width={356}
                  height={40}
                />
                <span className="mt-3">Consulting Teams</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/voi.png" alt="voi" width={96} height={40} />
                <span className="mt-3">Corporate Finance Teams</span>
              </div>
            </div>
          </div>

          <div className="neon absolute top-9 flex w-full flex-row items-center justify-center">
            <Neon></Neon>
          </div>
        </div>
      </div>
    </section>
  );
}
