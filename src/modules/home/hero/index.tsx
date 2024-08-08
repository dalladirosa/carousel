import { Button } from '@/components/ui/button';
import Windows from '@/icons/Windows';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function HeroSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get('type') as 'professional' | 'enterprise' | null;

  const CONTENT = {
    professional: {
      title: (
        <>
          Now you can make decks,
          <br /> models, & memos <b className="text-purple-60">5x faster</b>
        </>
      ),
      desc: (
        <>
          Carousel&apos;s PowerPoint & Excel add-ins cut tedious deck-building &{' '}
          <br />
          modeling tasks down to a couple clicks.
        </>
      ),
    },
    enterprise: {
      title: (
        <>
          Successfully manage <b className="text-purple-60">twice as many</b>{' '}
          <br /> deals clients, or LP relationships.
        </>
      ),
      desc: (
        <>
          Carousel enables you to turn your client deliverables around in half
          the time without <br /> compromising on quality, freeing you up to
          find & close your next deal, client, or LP
        </>
      ),
    },
  };

  return (
    <section className="container -mt-10 flex w-full flex-col items-center px-0 lg:px-8">
      <div className="w-full rounded-3xl rounded-t-[2.5rem] bg-primary-purple-45">
        {/* TODO: Add Animation */}
        <div className="px-10 py-[52px]">
          <div className="mx-auto mb-10 flex w-fit flex-row items-center justify-center gap-2 rounded-full bg-gray-100 p-1">
            <div
              className={cn(
                'rounded-full px-4 py-[4.5px]',
                type !== 'enterprise' && 'bg-primary-purple-10',
              )}
              role="button"
              onClick={() => router.push('/')}
            >
              <p
                className={cn(
                  'py-[2.5px] text-base font-bold leading-normal',
                  type !== 'enterprise' && 'text-primary-purple-70',
                )}
              >
                For Professionals
              </p>
            </div>
            <div
              className={cn(
                'rounded-full px-4 py-[4.5px]',
                type === 'enterprise' && 'bg-primary-purple-10',
              )}
              role="button"
              onClick={() => router.push('/?type=enterprise')}
            >
              <p
                className={cn(
                  'py-[2.5px] text-base font-bold leading-normal',
                  type === 'enterprise' && 'text-primary-purple-70',
                )}
              >
                For Enterprise
              </p>
            </div>
          </div>

          <h1 className="text-center text-3xl font-normal leading-none text-[#111827] lg:text-6xl">
            {CONTENT?.[type ?? 'professional'].title}
          </h1>
          <p className="mt-6 text-center text-lg text-gray-900 lg:text-xl">
            {CONTENT?.[type ?? 'professional'].desc}
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
                asChild
              >
                <a
                  href="https://calendly.com/daniel-carouseltech/30-minute-meeting-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-evenly px-6 py-10 lg:px-0">
          <div className="rounded-[2rem] border-2 border-black-30 p-2">
            <div className="rounded-3xl border border-purple-15 bg-white px-6 py-4 shadow-[0px_6px_6px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] ">
              <p className="mb-6 text-center text-lg font-bold text-gray-600">
                Powering teams at
              </p>
              <div className="grid grid-cols-2-356 items-center gap-8 lg:flex-row lg:gap-10">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/capstone.png"
                    alt="capstone"
                    width={267}
                    height={30}
                  />
                  <span className="mt-3 text-gray-600">Consulting Teams</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/voi.png"
                    alt="voi"
                    width={96}
                    height={30}
                  />
                  <span className="mt-3 text-gray-600">
                    Corporate Finance Teams
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="neon absolute top-9 flex w-full flex-row items-center justify-center">*/}
          {/*  <Neon />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
