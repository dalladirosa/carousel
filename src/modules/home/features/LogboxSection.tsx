import { Input } from '@/components/ui/input';
import Card from '@/modules/home/features/card';
import { Search } from 'lucide-react';
import { Copy } from 'lucide-react';
import React from 'react';

function LogboxSection() {
  return (
    <Card
      title="Logobox"
      imgUrl="/icons/logbox.svg"
      header="Find official logos with ease"
      subHeader={
        'Use the most up to date logos without wasting minutes on Google search'
      }
    >
      <div
        className="bg-gray h-fit w-full rounded-xl border border-white p-6 shadow-[0px_24px_32px_rgba(0,_0,_0,_0.08),_0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_4px_8px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] transition-all duration-500
      group-hover:-translate-y-24 "
      >
        <div className=" flex flex-row items-center justify-start self-stretch rounded-lg border border-gray-200 bg-white px-2 py-2">
          <Search className="h-5 w-5 stroke-[#777B7E] stroke-1" />
          <div className="flex flex-1 flex-col items-start justify-center self-stretch">
            <Input
              placeholder="Type a company name"
              className="focus-visible:ring-offset-0f h-auto border-0 py-0 text-black-90 ring-0 focus:border-0 focus:ring-0 focus-visible:outline-0 focus-visible:!ring-0 active:border-0 active:ring-0"
            />
          </div>
          <div className="flex flex-row items-center justify-start rounded-lg border-[1px] border-solid border-gray-300 bg-gray-100 px-[0.625rem] py-[0.25rem] text-gray-900">
            <b className="relative leading-[150%]">ctrl+K</b>
          </div>
        </div>

        <b className="relative my-5 inline-block h-[1.438rem] flex-1 leading-[120%]">
          Recently Used - Logos
        </b>

        <div className="flex flex-col items-start justify-start gap-[0.75rem] self-stretch">
          <div className="grid w-full grid-cols-3 gap-6">
            <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[rgba(0,0,0,0.03)] py-2">
              <img
                className="h-[3rem] w-[3rem] overflow-hidden"
                alt=""
                src="/icons/apple.svg"
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[rgba(0,0,0,0.03)] py-2">
              <img
                className="h-[3rem] w-[3rem] overflow-hidden"
                alt=""
                src="/icons/microsoft.svg"
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[rgba(0,0,0,0.03)] py-2">
              <img
                className="h-[3rem] w-[3rem] overflow-hidden"
                alt=""
                src="/icons/google.svg"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-6">
            <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[rgba(0,0,0,0.03)] py-2">
              <img
                className="h-[3rem] w-[3rem]"
                alt=""
                src="/icons/facebook.svg"
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[rgba(0,0,0,0.03)] py-2">
              <img
                className="h-[3rem] w-[3rem]"
                alt=""
                src="/icons/slack.svg"
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[rgba(0,0,0,0.03)] py-2">
              <img
                className="h-[3rem] w-[3rem]"
                alt=""
                src="/icons/figma.svg"
              />
            </div>
          </div>
        </div>

        <b className="relative my-5 inline-block h-[1.438rem] flex-1 leading-[120%]">
          Recently Used - Brand Colours
        </b>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-row items-center gap-[0.5rem] rounded-lg bg-gray-100 p-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-sm bg-[#E6001F]" />
              <img
                className="absolute -bottom-[5px] -right-[5px] h-4 w-4 overflow-hidden"
                alt=""
                src="icons/adobe.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative leading-[150%]">#E6001F</div>
              <Copy className="h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-[0.5rem] rounded-lg bg-gray-100 p-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-sm bg-[#fff]" />
              <img
                className="absolute -bottom-[5px] -right-[5px] h-4 w-4 overflow-hidden"
                alt=""
                src="icons/adobe.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative leading-[150%]">#FFFFFF</div>
              <Copy className="h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-[0.5rem] rounded-lg bg-gray-100 p-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-sm bg-[#236CFF]" />
              <img
                className="absolute -bottom-[5px] -right-[5px] h-4 w-4 overflow-hidden"
                alt=""
                src="/icons/intuit.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative leading-[150%]">#236CFF</div>
              <Copy className="h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-[0.5rem] rounded-lg bg-gray-100 p-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-sm bg-[#80BC06]" />
              <img
                className="absolute -bottom-[5px] -right-[5px] h-4 w-4 overflow-hidden bg-white"
                alt=""
                src="/icons/microsoft.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative leading-[150%]">#80BC06</div>
              <Copy className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LogboxSection;
