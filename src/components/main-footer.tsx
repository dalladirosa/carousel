import { Button } from '@/components/ui/button';
import { Copyright, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const MainFooter = () => {
  return (
    <section className="bg-gray-200">
      <div className="container px-0 xl:max-w-6xl">
        <div className="grid py-10 lg:grid-cols-12">
          <div className="col-span-9">
            <div className="flex flex-row items-center">
              <Image
                src="/icons/carousel_logo.svg"
                alt="open-shield"
                width={80}
                height={80}
              />
              <p className="text-3xl font-bold">Carousel</p>
            </div>
            <div className="mt-3 flex flex-row items-center gap-2">
              <span className="text-sm text-gray-600">backed by</span>
              <Image
                src="/icons/y_combinator_logo.svg"
                alt=""
                width="140"
                height="40"
              />
            </div>
            <div className="to mt-2 w-full rounded-md bg-gradient-to-b from-gray-600/30 to-gray-500/30 shadow-[0_0_1px_0_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F] lg:w-fit">
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
          <div className="col-span-3 pt-5 lg:pt-0">
            <div className="text-lg font-bold text-gray-990">Contact Us</div>
            <div className="flex flex-col gap-3 pt-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-gray-300 p-1.5">
                  <Phone className="size-4 text-gray-800" />
                </div>
                <div>(917) 794-5500</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-gray-300 p-1.5 ">
                  <Mail className="size-4 text-gray-800" />
                </div>
                <div>founders@usecarousel.com</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-gray-300 p-1.5 ">
                  <img src="/icons/linkedin.svg" alt="" className="size-4" />
                </div>
                <div>Carousel</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row items-center py-6 text-center text-gray-500 lg:flex-row">
          <div className="flex flex-row items-center gap-2">
            <Copyright size={24} />
            <div className="font-normal">
              2024 Carousel. All rights reserved.
            </div>
          </div>
          <div className="mx-3 h-2 w-2 rounded-full bg-gray-500" />
          <div className="font-normal">Based in New York City</div>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
