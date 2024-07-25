import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type ContentProps = React.PropsWithChildren<{
  current: number;
}>;

const FEATURES = [
  [
    {
      tag: 'External',
      title: 'Accelerate Client Engagements',
      desc: 'Use Carousel to automate the data collection and analysis process, so you can deliver actionable insights to your clients faster.',
      img: '/images/accelerate.png',
    },
    {
      tag: 'Internal',
      title: 'Optimize Internal Knowledge Management',
      desc: 'Use Carousel to automatically update internal knowledge bases and reports, ensuring your teams access the latest insights and tools for better client outcomes.',
      img: '/images/optimize.png',
    },
  ],
  [
    {
      tag: 'External',
      title: 'Accelerate Client Engagements',
      desc: 'Use Carousel to automate the data collection and analysis process, so you can deliver actionable insights to your clients faster.',
      img: '/images/accelerate.png',
    },
    {
      tag: 'Internal',
      title: 'Optimize Internal Knowledge Management',
      desc: 'Use Carousel to automatically update internal knowledge bases and reports, ensuring your teams access the latest insights and tools for better client outcomes.',
      img: '/images/optimize.png',
    },
  ],
  [
    {
      tag: 'External',
      title: 'Accelerate Client Engagements',
      desc: 'Use Carousel to automate the data collection and analysis process, so you can deliver actionable insights to your clients faster.',
      img: '/images/accelerate.png',
    },
    {
      tag: 'Internal',
      title: 'Optimize Internal Knowledge Management',
      desc: 'Use Carousel to automatically update internal knowledge bases and reports, ensuring your teams access the latest insights and tools for better client outcomes.',
      img: '/images/optimize.png',
    },
  ],
  [
    {
      tag: 'External',
      title: 'Accelerate Client Engagements',
      desc: 'Use Carousel to automate the data collection and analysis process, so you can deliver actionable insights to your clients faster.',
      img: '/images/accelerate.png',
    },
    {
      tag: 'Internal',
      title: 'Optimize Internal Knowledge Management',
      desc: 'Use Carousel to automatically update internal knowledge bases and reports, ensuring your teams access the latest insights and tools for better client outcomes.',
      img: '/images/optimize.png',
    },
  ],
];

const Content = ({ current }: ContentProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="col-span-2 grid h-[556px] grid-cols-subgrid gap-6"
      >
        {FEATURES[current].map((feature, index) => (
          <div className="h-[556px] rounded-3xl bg-gray-100 p-10 " key={index}>
            <Image
              src={feature.img}
              height={329}
              width={205}
              alt=""
              className="w-full object-contain"
            />
            <div className="border-primary-purple-30 w-fit rounded-2xl border bg-primary-purple-10 px-2 py-0.5 text-xs font-bold text-primary-purple-70">
              {feature.tag}
            </div>
            <p className="my-3 text-2xl font-bold text-gray-990">
              {feature.title}
            </p>
            <p className="text-lg text-gray-990">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(Content);
