import Linkedin from '@/icons/linkedin.svg';
import { Copyright, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const MainFooter = () => {
  return (
    <section className="bg-gray-200">
      <div className="container xl:max-w-6xl">
        <div className="grid py-10 lg:grid-cols-12">
          <div className="col-span-9">
            <Image
              src={'/images/open_shield.png'}
              alt="open-shield"
              width={80}
              height={80}
            />
            <div className="py-4 text-xl font-medium text-gray-990">
              Carousel is a better way to <br /> use PowerPoint & Excel
            </div>
            <Linkedin />
          </div>
          <div className="col-span-3 pt-5 lg:pt-0">
            <div className="text-lg font-bold text-gray-990">Contact Us</div>
            <div className="flex flex-col gap-3 pt-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-gray-300 p-1.5">
                  <Phone className="h-4 w-4 text-gray-800" />
                </div>
                <div>(917) 794-5500</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-gray-300 p-1.5 ">
                  <Mail className="h-4  w-4 text-gray-800" />
                </div>
                <div>founders@usecarousel.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between py-6 text-center lg:flex-row">
          <div className="flex gap-3">
            <Copyright size={24} />
            <div className="font-semibold text-gray-800">
              2024 Carousel. All rights reserved.
            </div>
          </div>
          <div className="font-semibold text-gray-800">
            Based in New York City
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
