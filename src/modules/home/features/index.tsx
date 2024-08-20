import { Button } from '@/components/ui/button';
import Features from '@/icons/features.svg';
import LogboxSection from '@/modules/home/features/LogboxSection';
import VersionControlSection from '@/modules/home/features/VersionControlSection';
import VersionHistorySection from '@/modules/home/features/VersionHistory';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const MASK_SIZE = 40;

function FeaturesSection() {
  const searchParams = useSearchParams();

  const type = searchParams.get('type') as 'professional' | 'enterprise' | null;

  const containerRef = useRef<any>(null);
  const [mousePosition, setMousePosition] = useState<any>({
    x: null,
    y: null,
  });

  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener('mousemove', updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'mousemove',
          updateMousePosition,
        );
      }
    };
  }, []);

  if (type === 'enterprise') return null;

  return (
    <section
      id="features-section"
      className="container flex w-full flex-col items-center px-0 lg:px-8"
    >
      <div className="flex w-full flex-col items-center rounded-[40px] border border-black-30 bg-gray-100 py-6 lg:py-10">
        <div className="flex flex-col items-center p-4 pt-0 text-center">
          <div className="mx-auto w-fit overflow-auto rounded-full bg-gradient-to-br from-[#9D71FF]/30 to-[#4B78EC]/30 p-[1px]">
            <div className="flex flex-row items-center rounded-full bg-gray-100 px-2.5 py-1 text-sm font-bold text-purple-70">
              <div className="mr-1 flex h-4 w-4 items-center">
                <Features />
              </div>{' '}
              Features
            </div>
          </div>
          <div className="group relative mt-4 text-center">
            <h1 className="text-center text-4xl font-medium text-[#111827]">
              <span className="inline-block translate-x-[35%] transition-all duration-500 group-hover:translate-x-0">
                Give your
              </span>{' '}
              <span className="inline-block translate-x-[25%] animate-fade-show text-transparent opacity-0 transition-all [text-shadow:rgb(17_17_17/0.3)_0_0_2px] group-hover:translate-x-0 group-hover:opacity-100">
                (least)
              </span>{' '}
              <span className="inline-block -translate-x-[47%] transition-all duration-500 group-hover:translate-x-0">
                favorite
              </span>
            </h1>
            <div className="flex flex-row justify-center text-center text-4xl font-medium text-[#111827]">
              <span className="mr-2">software </span>

              <div ref={containerRef} className="z-50 grid">
                <motion.div
                  className="z-20 will-change-transform [grid-area:1/1] [mask-image:url(/icons/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
                  animate={{
                    WebkitMaskPosition: `${mousePosition.x - MASK_SIZE / 2}px ${
                      mousePosition.y - MASK_SIZE / 2
                    }px`,
                    WebkitMaskSize: `${MASK_SIZE}px`,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'backOut',
                    duration: 0.1,
                  }}
                >
                  <span className="bg-clip-text text-transparent [background-image:linear-gradient(180deg,#6050D7_0%,#E3E0FB_100%)] [grid-area:1/1] [text-stroke:1px_#fff]">
                    {' '}
                    super-powers
                  </span>
                </motion.div>{' '}
                <div className="text-purple-40 [grid-area:1/1]">
                  super-powers
                </div>
              </div>
            </div>
            <p className="mt-4 font-light">
              We know the features you need to accelerate and unblock <br />{' '}
              your workflow
            </p>
          </div>
        </div>

        <div className="z-50 mt-[40px] grid grid-cols-1 gap-6 px-6 lg:grid-cols-2 lg:gap-10 lg:px-20">
          <VersionControlSection />
          <LogboxSection />
          <VersionHistorySection className="w-full items-center lg:col-span-2 lg:mx-auto lg:w-fit" />
        </div>

        <div className="mt-10 flex flex-col items-center">
          <p className="text-2xl font-bold text-gray-990">
            Are we missing something you want?
          </p>

          {/*TODO: Refine this button */}

          <div className="to mt-6 w-full rounded-md bg-gradient-to-b from-gray-600/30 to-gray-500/30 shadow-[0_0_1px_0_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F] lg:w-fit">
            <Button
              className="w-full border-0 p-3.5 text-lg text-gray-800 lg:w-fit"
              variant="outline"
            >
              Request a Feature
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
