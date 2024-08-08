import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

const FAQS = [
  {
    title: "Is my data and my clients' data safe with Carousel?",
    description: (
      <>
        Yes. For cloud-hosted solutions, we implement industry-leading security
        protocols. Data is encrypted in transit and at rest using TLS 1.2 and
        AES-256. All cloud services have minimal security permissions & are
        monitored 24/7. However, we prefer to deploy as much of our solution as
        possible on-premise to reduce risk surface area.
        <br /> <br />
        We are currently undergoing a SOC 2 Type II audit to demonstrate our
        commitment to security & enterprise readiness. We&apos;re happy to
        produce an engagement letter from our auditor upon request.
      </>
    ),
  },
  {
    title: 'Can you build custom features for my deal team?',
    description: (
      <>
        Yes. The goal of every Carousel enterprise engagement is to design,
        build, and deploy a productivity toolkit that your associates can&apos;t
        live without.
        <br /> <br />
        This cannot be mass-produced. We can only serve each of our clients in a
        bespoke way.
        <br /> <br />
        You can think of Carousel as custom software at a SaaS price point.
      </>
    ),
  },
  {
    title: 'Can I get my money back',
    description: (
      <>
        Yes. If you&apos;re not impressing clients with faster deliverable
        turnaround and growing your deal capacity within 60 days of working with
        us, we will:
        <br /> <br />
        <ul className="ml-4 list-inside list-disc">
          <li>Refund you.</li>
          <li>
            Give you access to our platform for free for 12 months with
            complimentary upgrades.
          </li>
          <li>Pay for your team&apos;s next 3 happy hours.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Do you offer 24/7 support?',
    description: (
      <>
        Yes. We offer 24/7 support over email, video chat, live chat, or phone.
        <br /> <br />
        Given that your analysts & associates are working on their decks and
        models late into the night, it&apos;s important that we stay on their
        schedule in case they have feedback or if something goes wrong.
      </>
    ),
  },
  {
    title:
      'What are the system requirements for Carousel, and is there a trial version available?',
    description: (
      <>
        Today, Carousel Pro (our Carousel PowerPoint & Excel add-in suite) is
        only available on Windows. We are considering adding support for Mac. If
        you would like us to offer Mac support, please visit our feature board
        and make a suggestion.
        <br /> <br />
        For Carousel Pro, we offer a 14 day free-trial.
        <br /> <br />
        For enterprise solutions, we run paid Proof-of-Concept periods for 30-70
        days which have a money back guarantee.
      </>
    ),
  },
];

const FaqSection = () => {
  return (
    <section className="container mb-20 xl:max-w-4xl">
      <div className="mb-2 flex justify-center">
        <div className="flex items-center gap-1 rounded-2xl border border-purple-15 bg-white px-2 py-1">
          <span className="text-sm font-bold text-primary-purple-70">
            Need answers?
          </span>
        </div>
      </div>
      <div>
        <div className="mb-10 pt-3 text-center text-5xl font-medium">
          Frequently Asked Questions
        </div>
        {FAQS.map((faq, i) => (
          <Accordion type="single" collapsible key={i} className="my-4">
            <AccordionItem value={`${i}`}>
              <AccordionTrigger className="text-lg">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-800">
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
