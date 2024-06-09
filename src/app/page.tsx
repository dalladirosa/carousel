'use client';

import MainNav from '@/components/main-nav';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Door from '@/icons/door.svg';
import Door2 from '@/icons/door_2.svg';
import Efficiency from '@/icons/efficiency.svg';
import Enterprise from '@/icons/enterprise.svg';
import Features from '@/icons/features.svg';
import FindLogos from '@/icons/find_logos.svg';
import Functionality from '@/icons/functionality.svg';
import Play from '@/icons/play.svg';
import Shuffle from '@/icons/shuffle.svg';
import Support from '@/icons/support.svg';
import TrackChanges from '@/icons/track_changes.svg';
import Vector1 from '@/icons/vector-1.svg';
import VectorMobile from '@/icons/vector-mobile.svg';
import VersionHistory3D from '@/icons/version_history3d.svg';
import WebSecurity from '@/icons/web_security.svg';
import FeaturesSection from '@/modules/home/features';
import HeroSection from '@/modules/home/hero';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Copyright, Pause } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const FAQS = [
  {
    title:
      'How does Carousel integrate with my current PowerPoint and Excel workflows?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title: 'Can Carousel help me manage changes when working with large teams?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      "How does Carousel's change tracking improve over the built-in version history in Office 365?",
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      'I’m working on sensitive decks & models. Is my data secure when using Carousel?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      'How can Carousel reduce errors and improve the accuracy of our deliverables?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      'What are the system requirements for Carousel, and is there a trial version available?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
];

export default function Home() {
  const guardRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          mobile: '(max-width: 640px)',
          desktop: '(min-width: 640px)',
        },
        (ctx) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.guard',
              start: ctx.conditions?.mobile ? 'top top+=40%' : 'top top',
              end: '+=340%',
              pin: true,
              scrub: true,
              pinSpacing: false,
            },
            delay: 1,
          });

          tl.add(
            [
              gsap.to(
                '.door',
                ctx.conditions?.mobile
                  ? { x: -1300, duration: 4, delay: 0 }
                  : { x: -1300, duration: 4, delay: 1 },
              ),
              gsap.to('.ventilation', { y: -1300, duration: 4, delay: 1 }),
              gsap.to(
                '.door-2',
                ctx.conditions?.mobile
                  ? { x: 1300, duration: 4, delay: 0 }
                  : { x: 1300, duration: 4, delay: 1 },
              ),
              gsap.to(
                '.door-key',
                ctx.conditions?.mobile
                  ? { x: 1500, duration: 4, delay: 0 }
                  : { x: -1500, duration: 4, delay: 1 },
              ),
              gsap.to('.guard-line', { display: 'none' }),
            ],
            '+=0%',
          );
        },
      );
    },
    { scope: guardRef },
  );

  return (
    <>
      <main ref={guardRef} className="flex min-h-screen flex-col items-center">
        <MainNav />

        <HeroSection />

        <section className="guard container relative mb-60 flex h-[1024px] w-full flex-row items-center ">
          <div className=" guard-line absolute left-0 right-0 top-0 z-[999] hidden h-full w-full flex-col items-center justify-center lg:flex">
            <div
              className="relative h-full w-full
                      [mask-image:url('/icons/neon_group.svg')] [mask-size:auto]"
            >
              <div className="h-[100px] w-full translate-y-[-100%] animate-[go-down_2s_linear_infinite] bg-gradient-to-b from-transparent to-[#fff] blur-[0.3px]"></div>
            </div>
          </div>
          <div className="guard-line absolute left-[-2%] right-[5%] top-[-31%] z-[999] flex h-full w-full flex-col items-center justify-center lg:hidden">
            <div
              className="relative h-full w-full
                      [mask-image:url('/icons/neon_group_mobile.svg')] [mask-size:auto]"
            >
              <div className="h-[100px] w-full translate-y-[-100%] animate-[go-down_2s_linear_infinite] bg-gradient-to-b from-transparent to-[#fff] blur-[0.3px]"></div>
            </div>
          </div>
          <div className="ventilation absolute -left-[7px] -right-[14px] top-[6px] z-[9999] flex scale-[1.01] items-center justify-center">
            <span className="hidden lg:block">
              <Vector1 />
            </span>
            <span className="lg:hidden">
              <VectorMobile />
            </span>
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
                  <span className="bg-clip-text text-purple-40">
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
          <div className="door absolute left-[3px] top-[5px] z-[1] ">
            <span className="hidden lg:block">
              <Door2 />
            </span>
            <span className="lg:hidden">
              <Image
                src={'/images/door_mobile.svg'}
                alt="door-mobile"
                width={197}
                height={585}
              />
            </span>
          </div>
          <div className="door-2 absolute -right-[5px] top-[5px] z-[1]">
            <span className="hidden lg:block">
              <Door />
            </span>
            <span className="scale-x-[-1] lg:hidden">
              <Image
                src={'/images/door_mobile.svg'}
                alt="door-mobile"
                width={197}
                height={585}
                className="scale-x-[-1]"
              />
            </span>
          </div>
          <div className="door-key absolute left-[50.6%] top-[47%] z-[1] h-[159px] w-[159px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white bg-gradient-to-b from-[#FFFFFF] to-[#E6E6E6] p-2 shadow-[0_0_3.65px_0_#00000073,0px_0px_1.82px_0_#00000040] lg:h-[308px] lg:w-[320px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F9FAFB]">
              <Image
                src="/icons/carousel.svg"
                alt="carousel"
                width={240}
                height={240}
                className="h-[116px] w-[116px] lg:h-[240px] lg:w-[240px]"
              />
            </div>
          </div>
        </section>

        <FeaturesSection />

        <section className="container mt-20">
          <div className="rounded-[40px] bg-gradient-to-b from-[#8479E2] to-[#6050D7] pt-10 lg:p-20">
            <div className="flex justify-center">
              <div className="flex items-center gap-1 rounded-xl bg-white px-2 py-1">
                <Play />
                <span className="text-sm font-bold text-primary-purple-70">
                  Watch this
                </span>
              </div>
            </div>
            <div className="pt-2 text-center text-5xl text-white">
              See it in action
            </div>
            <div className="flex pt-12">
              <div className="rounded-[40px] bg-gray-990 lg:w-[440px]">
                <div className="px-10 py-10">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl text-[#8479E2]">Track Changes</div>
                    <TrackChanges />
                  </div>
                  <div className="pb-10 text-gray-300">
                    <div className="text-3xl">
                      Track changes from previous drafts with one click
                    </div>
                    <div className="py-2 text-xl">
                      Rewind your deck or model&apos;s history.
                    </div>
                    <div>
                      Our tool tracks every edit, ensuring that your file edits
                      are saved and documented with every keystroke.
                    </div>
                  </div>
                </div>
                <div className="px-10">
                  <div className="flex items-center gap-3 pl-4">
                    <Pause
                      fill="#6050D7"
                      color="#6050D7"
                      width={18}
                      height={18}
                    />
                    <Shuffle />
                  </div>
                  <div className="mx-auto h-1.5 w-[360px] rounded-t-xl bg-gray-700">
                    <div className="h-full w-[100px] rounded-tl-xl bg-purple-60"></div>
                  </div>
                </div>
                <div className="border-t border-gray-800">
                  <div className="flex items-center justify-between px-10 py-3">
                    <div className="text-2xl text-gray-200 ">Collaborate</div>
                    <VersionHistory3D />
                  </div>
                </div>
                <div className="border-t border-gray-800">
                  <div className="flex items-center justify-between px-10 py-3">
                    <div className="text-2xl text-gray-200 ">
                      Stop Versioning Up
                    </div>
                    <VersionHistory3D />
                  </div>
                </div>
                <div className="border-t border-gray-800">
                  <div className="flex items-center justify-between px-10 py-3">
                    <div className="text-2xl text-gray-200 ">Find Logos</div>
                    <FindLogos />
                  </div>
                </div>
              </div>
              <div className="relative place-content-center">
                <Image
                  src={'/images/track.png'}
                  alt="track"
                  width={780}
                  height={449}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-20 rounded-3xl">
          <div className="rounded-[40px] bg-gradient-to-b from-[#fff] to-[#f9fafb]">
            <div className="rounded-[40px] lg:p-20">
              <div className="flex justify-center">
                <div className="flex items-center gap-1 rounded-2xl border border-purple-15 bg-white px-2 py-1">
                  <Enterprise />
                  <span className="text-sm font-bold text-primary-purple-70">
                    Enterprise
                  </span>
                </div>
              </div>
              <div className="pt-2 text-center text-3xl font-medium lg:text-5xl ">
                Carousel for Enterprise
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 lg:px-20">
              <div className="flex flex-col items-center rounded-2xl border border-[#F1F0FF] bg-white p-10">
                <WebSecurity />
                <div className="py-4 text-xl font-bold lg:py-0 lg:text-2xl">
                  Bank-level Security
                </div>
                <div className="text-center">
                  Carousel can be deployed entirely on-premise, so no data ever
                  leaves your company’s ecosystem.
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#F1F0FF] bg-white p-10">
                <Efficiency />
                <div className="py-4 text-xl font-bold lg:py-0 lg:text-2xl">
                  Efficiency Guarantee
                </div>
                <div className="text-center">
                  If each person on your junior team isn’t saving at least 5
                  hours per week with Carousel, you keep the software for free.
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#F1F0FF] bg-white p-10">
                <Functionality />
                <div className="py-4 text-xl font-bold lg:py-0 lg:text-2xl">
                  Customize Functionality
                </div>
                <div className="text-center">
                  Carousel can design & build custom toolkits for your team that
                  integrate with your existing data providers.
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#F1F0FF] bg-white p-10">
                <Support />
                <div className="py-4 text-xl font-bold lg:py-0 lg:text-2xl">
                  24/7 Support
                </div>
                <div className="text-center">
                  Your associates & analysts are up all night making models and
                  decks. We’ll stay up with them.
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-36 pt-10">
              <Button className="bg-gradient-to-b from-[#8479E2] to-[#6050D7] text-white">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-44 xl:max-w-4xl">
          <div className="mb-2 flex justify-center">
            <div className="flex items-center gap-1 rounded-2xl border border-purple-15 bg-white px-2 py-1">
              <span className="text-sm font-bold text-primary-purple-70">
                Need answers?
              </span>
            </div>
          </div>
          <div>
            <div className="pb-16 pt-3 text-center text-5xl font-medium">
              Frequently Asked Questions
            </div>
            {FAQS.map((faq, i) => (
              <Accordion type="single" collapsible key={i} className="my-4">
                <AccordionItem value={`${i}`}>
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent className="text-gray-800">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>

        <section className="container xl:max-w-6xl">
          <div className="grid py-10 lg:grid-cols-12">
            <div className="col-span-9">
              <Image
                src={'/images/open_shield.png'}
                alt="open-shield"
                width={80}
                height={80}
              />
              <div className="py-4 text-xl font-medium text-gray-990">
                A better way to use <br /> Powerpoint & Excel
              </div>
              <Image
                src={'/images/linkedin.png'}
                alt="linkedin"
                width={24}
                height={24}
              />
            </div>
            <div className="col-span-3 pt-5 lg:pt-0">
              <div className="text-lg font-bold text-gray-990">Contact Us</div>
              <div className="flex flex-col gap-3 pt-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={'/images/phone.png'}
                    alt="phone"
                    width={36}
                    height={36}
                  />
                  <div>(917) 794-5500</div>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={'/images/message.png'}
                    alt="message"
                    width={36}
                    height={36}
                  />
                  <div>daniel@usecarousel.com</div>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={'/images/message.png'}
                    alt="message"
                    width={36}
                    height={36}
                  />
                  <div>jude@usecarousel.com</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <section className="bg-gray-200 py-6">
        <div className="container xl:max-w-6xl">
          <div className="flex flex-col justify-between text-center lg:flex-row">
            <div className="flex gap-3">
              <Copyright size={24} />
              <div className="font-semibold text-gray-800">
                2024 Carousel. All rights reserved.
              </div>
            </div>
            <div className="font-semibold text-gray-800">
              Based in New York City
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
    </>
  );
}
