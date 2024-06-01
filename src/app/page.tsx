'use client';

import MainNav from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import Door from '@/icons/door.svg';
import Door2 from '@/icons/door_2.svg';
// import NeonBase from '@/icons/Neon Base.svg';
import Features from '@/icons/features.svg';
import Neon from '@/icons/neon.svg';
import NeonGroup from '@/icons/neon_group.svg';
// import Vector2 from '@/icons/vector2.svg';
import Vector1 from '@/icons/vector-1.svg';
import Vector2B from '@/icons/vector-2-b.svg';
import Vector2 from '@/icons/vector-2.svg';
import Vector3B from '@/icons/vector-3-b.svg';
import Vector3 from '@/icons/vector-3.svg';
import Vector4B from '@/icons/vector-4-b.svg';
import Vector4 from '@/icons/vector-4.svg';
import RequestFeatureSection from '@/modules/home/features/RequestFeatureSection';
import VersionControlSection from '@/modules/home/features/VersionControlSection';
import VersionHistorySection from '@/modules/home/features/VersionHistory';
import { useGSAP } from '@gsap/react';
import { useMouse } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Vector from '@/icons/vector.svg';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const guardRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({
    x: null,
    y: null,
  });
  const containerRef = useRef<any>(null);
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

  let maskSize = isHovered ? 40 : 40;
  useGSAP(
    () => {
      // ScrollTrigger.create({
      //   trigger: '.guard',
      //   start: 'top top',
      //   end: 'bottom top',
      //   pin: true,
      //   scrub: true,
      //   pinSpacing: false,
      //   markers: true,
      // });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.guard',
          start: 'top top',
          end: '+=340%',
          pin: true,
          scrub: true,
          pinSpacing: false,
          // markers: true,
        },
        delay: 1,
      });

      tl.add(
        [
          gsap.to('.door', { x: -1300, duration: 4, delay: 1 }),
          gsap.to('.ventilation', { y: -1300, duration: 4, delay: 1 }),
          gsap.to('.door-2', { x: 1300, duration: 4, delay: 1 }),
          gsap.to('.door-key', { x: -1500, duration: 4, delay: 1 }),
          gsap.to('.guard-line', { display: 'none' }),
        ],
        '+=0%',
      );
      // gsap.to('.door', {
      //   x: -1300, // Move the divs up out of view
      //   duration: 5,
      //   scrollTrigger: {
      //     trigger: '.guard',
      //     start: 'top top',
      //     end: '+=100%',
      //     pin: true,
      //     scrub: true,
      //     pinSpacing: false,
      //     markers: true,
      //   },
      // });
      // gsap.to('.door-2', {
      //   x: 1300, // Move the divs up out of view
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: '.guard',
      //     start: 'top top',
      //     end: '+=100%',
      //     pin: true,
      //     scrub: true,
      //     pinSpacing: false,
      //     markers: true,
      //   },
      // });
      //
      // ScrollTrigger.create({
      //   trigger: element,
      //   start: 'top top',
      //   end: 'bottom bottom',
      //   pin: true,
      //   pinSpacing: false,
      //   markers: true,
      // });
    },
    { scope: guardRef },
  );

  useLayoutEffect(() => {
    // const tl = gsap.timeline();
    // tl.from('.door', { x: -1300 }).from('.door-2', { x: 1300 });
    // gsap.to('.door', {
    //   x: -1300, // Move the divs up out of view
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: '.guard',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     pin: true,
    //     scrub: true,
    //     pinSpacing: false,
    //     markers: true,
    //   },
    // });
    // gsap.to('.door-2', {
    //   x: 1300, // Move the divs up out of view
    //   duration: 1,
    //   scrollTrigger: {
    //     markers: true,
    //     trigger: '.guard',
    //     start: 'top top',
    //     end: '+=100%',
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: 1,
    //   },
    // });
    // gsap.create('.guard', {
    //   scrollTrigger: { trigger: '.guard', pin: true, pinSpacing: true }, // start the animation when ".box" enters the viewport (once)
    //   end: 'left 50%+=100px',
    //   makers: true,
    // });
    // gsap.utils.toArray('.door').forEach((el, i) => {
    //   ScrollTrigger.create({
    //     trigger: el,
    //     start: 'top top',
    //     pin: true,
    //     pinSpacing: true,
    //   });
    // });
  }, []);
  return (
    <main
      ref={guardRef}
      className="mb-[120px] flex min-h-screen flex-col items-center"
    >
      <MainNav />

      <section className="container mb-60 flex w-full flex-col items-center">
        <div className="w-full rounded-t-[2.5rem] bg-gradient-to-b from-[#F8F7FF] to-[#FFFFFF] pt-32">
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

          <div className="relative flex w-full flex-row items-center justify-evenly pt-40">
            <div className="flex flex-row items-center gap-36">
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
            <div className="absolute top-12 flex w-full flex-row items-center justify-center">
              <div className="translate-x-[15px] ">
                <Neon />
              </div>

              <div className="-translate-x-[15px] scale-x-[-1]">
                <Neon />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guard container relative mb-60 flex h-[1024px] w-full flex-row items-center ">
        <div className="guard-line absolute left-0 right-0 top-0 z-[999] flex h-full w-full flex-col items-center justify-center">
          <div
            className="relative h-full w-full
                      [mask-image:url('/icons/neon_group.svg')] [mask-size:auto]"
          >
            <div className="h-[100px] w-full translate-y-[-100%] animate-[go-down_2s_linear_infinite] bg-gradient-to-b from-transparent to-[#fff] blur-[0.3px]"></div>
          </div>
        </div>
        <div className="ventilation absolute -left-[7px] -right-[14px] top-[6px] z-[9999] flex scale-[1.01] items-center justify-center">
          <Vector1 />
          <div className="absolute left-0 right-0 top-0 z-[9999] p-4 text-center">
            <div className="mx-auto w-fit overflow-auto rounded-full bg-gradient-to-br from-[#9D71FF]/30 to-[#4B78EC]/30 p-[1px]">
              <div className="flex flex-row items-center rounded-full bg-gray-100 px-2.5 py-1 text-sm font-bold text-purple-70">
                <div className="mr-1 flex h-4 w-4 items-center">
                  <Features />
                </div>{' '}
                Features
              </div>
            </div>
            <div className="group mt-4 ">
              <h1 className="text-4xl font-medium text-[#111827]">
                <span className="inline-block translate-x-[35%] transition-all duration-500 group-hover:translate-x-0">
                  Give your
                </span>{' '}
                <span className="inline-block translate-x-[25%] animate-fade-show text-transparent opacity-0 transition-all [text-shadow:rgb(17_17_17/0.3)_0_0_2px] group-hover:translate-x-0 group-hover:opacity-100">
                  (least)
                </span>{' '}
                <span className="inline-block -translate-x-[42%] transition-all duration-500 group-hover:translate-x-0">
                  favorite
                </span>
              </h1>
              <h1 className="text-4xl font-medium text-[#111827]">
                software{' '}
                <span className="bg-clip-text text-purple-40 text-transparent">
                  super-powers
                </span>
              </h1>
              <p className="mt-4 font-light">
                We know the features you need to accelerate and unblock <br />{' '}
                your workflow
              </p>
            </div>
          </div>
        </div>
        <div className="door absolute left-[3px] top-[5px] z-[1]">
          <Door2 />
        </div>
        <div className="door-2 absolute -right-[5px] top-[5px] z-[1]">
          <Door />
        </div>
        <div className="door-key absolute left-[50.6%] top-[47%] z-[1] flex h-[308px] w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white bg-gradient-to-b from-[#FFFFFF] to-[#E6E6E6] p-2 shadow-[0_0_3.65px_0_#00000073,0px_0px_1.82px_0_#00000040]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F9FAFB]">
            <Image
              src="/icons/carousel.svg"
              alt="carousel"
              width={240}
              height={240}
              className="h-[240px] w-[240px]"
            />
          </div>
        </div>
      </section>

      <section className="container flex w-full flex-col items-center">
        <div className="flex w-full flex-col rounded-[40px] border border-gray-200 bg-gray-100 py-[80px] shadow-[0px_4px_12px_0px_#0000000D_inset]">
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
              <h1 className="flex flex-row text-center text-4xl font-medium text-[#111827]">
                software{' '}
                <div ref={containerRef} className="z-50 grid">
                  <motion.div
                    className="z-20 will-change-transform [grid-area:1/1] [mask-image:url(/icons/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
                    animate={{
                      WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
                        mousePosition.y - maskSize / 2
                      }px`,
                      WebkitMaskSize: `${maskSize}px`,
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
              </h1>
              <p className="mt-4 font-light">
                We know the features you need to accelerate and unblock <br />{' '}
                your workflow
              </p>
            </div>
          </div>

          <div className="mt-[40px] grid grid-cols-2 gap-[40px] px-[80px]">
            <VersionControlSection />
            <div className="overflow-auto rounded-[40px] bg-gradient-to-b from-[#fff] to-[rgba(255,255,255,0)] p-[1px] [box-shadow:0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]">
              <div className="h-full w-full rounded-[40px] bg-gray-100">
                <div className="rounded-[40px] border-[1.5px] border-white bg-white bg-opacity-60">
                  <img src="/icons/version_control.svg" alt="" />
                </div>
              </div>
            </div>
            <VersionHistorySection />
            <RequestFeatureSection />
          </div>
        </div>
      </section>
    </main>
  );
}
