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
      subHeader="Use the most up to date logos without wasting minutes on Google search"
    >
      <div className="font-sans-body-body-small relative box-border flex w-full flex-col items-start justify-start overflow-hidden rounded-xl border-[1px] border-solid border-white bg-gray-200 text-left text-[0.813rem] text-gray-900 shadow-[0px_24px_32px_rgba(0,_0,_0,_0.08),_0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_4px_8px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] transition-all duration-500 group-hover:-translate-y-24">
        <div className="flex h-[29.813rem] flex-row items-center justify-center self-stretch">
          <div className="flex flex-1 flex-col items-start justify-start gap-[0.5rem] self-stretch p-[1.5rem]">
            <div className="flex flex-col items-start justify-start self-stretch text-gray-500">
              <div className="flex flex-col items-start justify-start self-stretch rounded-lg border-[1px] border-solid border-gray-200 bg-white px-[0.5rem] py-[0.312rem]">
                <div className="flex flex-row items-center justify-start self-stretch">
                  <div className="flex flex-row items-center justify-start self-stretch">
                    <Search className="h-5 w-5" />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center self-stretch">
                    <Input
                      placeholder="Type a company name"
                      className="focus-visible:ring-offset-0f border-0 text-black-90 ring-0 focus:border-0 focus:ring-0 focus-visible:outline-0 focus-visible:!ring-0 active:border-0 active:ring-0"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center self-stretch text-[0.938rem] text-gray-900">
                    <div className="flex flex-row items-center justify-start rounded-lg border-[1px] border-solid border-gray-300 bg-gray-100 px-[0.625rem] py-[0.25rem]">
                      <b className="relative leading-[150%]">ctrl+K</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center self-stretch px-[0rem] py-[0.75rem] text-[0.938rem]">
              <b className="relative inline-block h-[1.438rem] flex-1 leading-[120%]">
                Recently Used - Logos
              </b>
            </div>
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
            <div className="flex flex-row items-start justify-center self-stretch px-[0rem] py-[0.75rem] text-[0.938rem]">
              <b className="relative inline-block h-[1.438rem] flex-1 leading-[120%]">
                Recently Used - Brand Colours
              </b>
            </div>
            <div className="text-black flex flex-col items-start justify-start gap-[0.5rem] self-stretch">
              <div className="z-[1] flex flex-row items-start justify-start gap-[0.75rem] self-stretch">
                <div className="relative flex flex-1 flex-row items-center justify-start gap-[0.5rem] rounded-lg bg-gray-100">
                  <div className="z-[0] flex flex-1 flex-row items-center justify-start gap-[0.75rem] p-[0.375rem]">
                    <div className="relative h-[2rem] w-[2rem] rounded-sm bg-[#E6001F]" />
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative leading-[150%]">#E6001F</div>
                      <Copy className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <img
                    className="absolute left-[1.813rem] top-[1.813rem] z-[1] !m-[0] h-[0.75rem] w-[0.75rem] shrink-0 overflow-hidden"
                    alt=""
                    src="icons/adobe.svg"
                  />
                  <b className="absolute left-[0rem] top-[0rem] z-[2] !m-[0] inline-block w-[0rem] text-center text-[0.063rem] leading-[150%] text-white opacity-[0]">
                    Adobe
                  </b>
                </div>
                <div className="relative flex flex-1 flex-row items-center justify-start gap-[0.5rem] rounded-lg bg-gray-100">
                  <div className="z-[0] flex flex-1 flex-row items-center justify-start gap-[0.75rem] p-[0.375rem]">
                    <div className="relative h-[2rem] w-[2rem] rounded-sm bg-white" />
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative leading-[150%]">#FFFFFF</div>
                      <Copy className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <img
                    className="absolute left-[1.813rem] top-[1.813rem] z-[1] !m-[0] h-[0.75rem] w-[0.75rem] shrink-0 overflow-hidden"
                    alt=""
                    src="icons/adobe.svg"
                  />
                  <b className="absolute left-[0rem] top-[0rem] z-[2] !m-[0] inline-block w-[0rem] text-center text-[0.063rem] leading-[150%] text-white opacity-[0]">
                    Adobe
                  </b>
                </div>
              </div>
              <div className="z-[0] flex flex-row items-start justify-start gap-[0.75rem] self-stretch">
                <div className="relative flex flex-1 flex-row items-center justify-start gap-[0.5rem] rounded-lg bg-gray-100">
                  <div className="z-[0] flex flex-1 flex-row items-center justify-start gap-[0.75rem] p-[0.375rem]">
                    <div className="relative h-[2rem] w-[2rem] rounded-sm bg-[#236CFF]" />
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative leading-[150%]">#236CFF</div>
                      <Copy className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <img
                    className="absolute left-[1.813rem] top-[1.813rem] z-[1] !m-[0] h-[0.75rem] w-[0.75rem] object-cover"
                    alt=""
                    src="/icons/intuit.svg"
                  />
                  <b className="absolute left-[0rem] top-[0rem] z-[2] !m-[0] inline-block w-[0rem] text-center text-[0.063rem] leading-[150%] text-white opacity-[0]">
                    Intuit
                  </b>
                </div>
                <div className="relative flex flex-1 flex-row items-center justify-start gap-[0.5rem] rounded-lg bg-gray-100">
                  <div className="z-[0] flex flex-1 flex-row items-center justify-start gap-[0.75rem] p-[0.375rem]">
                    <div className="relative h-[2rem] w-[2rem] rounded-sm bg-[#80BC06]" />
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative leading-[150%]">#80BC06</div>
                      <Copy className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <img
                    className="absolute left-[1.813rem] top-[1.813rem] z-[1] !m-[0] h-[0.75rem] w-[0.75rem] object-cover"
                    alt=""
                    src="/icons/microsoft.svg"
                  />
                  <b className="absolute left-[0rem] top-[0rem] z-[2] !m-[0] inline-block w-[0rem] text-center text-[0.063rem] leading-[150%] text-white opacity-[0]">
                    Intuit
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LogboxSection;
