import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const FaqSection = () => {
  const FAQS = [
    {
      title:
        'I ran into trouble installing it due to a security restriction at work, how can I get around this?',
      description: (
        <>
          <p>
            At Carousel, security takes priority in everything we do. We’d love
            to get Carousel cleared at your firm - join your firm’s waitlist to
            make it happen!
          </p>
          <Button
            variant="secondary"
            className="mx-auto mt-4 rounded-lg border border-gray-600/30 bg-white font-bold text-gray-800 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
          >
            Join Your Firm’s Waitlist
          </Button>
        </>
      ),
    },
    {
      title: 'I use a Mac for my PowerPoint & Excel work, can I use Carousel?',
      description: (
        <>
          <p>
            Support for Mac is coming soon! Add yourself to our waitlist to be
            updated as soon as it’s available.
          </p>
          <Button
            variant="secondary"
            className="mx-auto mt-4 gap-2 rounded-lg border border-gray-600/30 bg-white font-bold text-gray-800 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
          >
            <Image src="/icons/apple_black.svg" width={28} height={28} alt="" />
            Join the Mac Waitlist
          </Button>
        </>
      ),
    },
  ];

  return (
    <section className="container mb-20 xl:max-w-4xl">
      <div className="mb-2 flex justify-center">
        <div className="w-fit overflow-auto rounded-full bg-gradient-to-br from-[#9D71FF]/30 to-[#4B78EC]/30 p-[1px]">
          <div className="flex flex-row items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-sm font-bold text-purple-70">
            <Image src="/icons/sparkle.svg" width={16} height={16} alt="" />
            FAQ
          </div>
        </div>
      </div>
      <div>
        <div className="mb-10 pt-3 text-center text-3xl font-medium md:text-5xl">
          Security restriction? Want it on Mac?
        </div>
        {FAQS.map((faq, i) => (
          <Accordion type="single" collapsible key={i} className="my-4">
            <AccordionItem value={`${i}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col text-lg text-gray-800">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
