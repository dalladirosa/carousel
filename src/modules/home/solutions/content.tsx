import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const Content = () => {
  return (
    <div className="col-span-2 grid grid-cols-subgrid gap-6">
      <div className="rounded-3xl bg-gray-100 p-10">
        <Image
          src="/images/accelerate.png"
          height={329}
          width={205}
          alt=""
          className="w-full object-contain"
        />
        <div className="border-primary-purple-30 w-fit rounded-2xl border bg-primary-purple-10 px-2 py-0.5 text-xs font-bold text-primary-purple-70">
          External
        </div>
        <p className="my-3 text-2xl font-bold text-gray-990">
          Accelerate Client Engagements
        </p>
        <p className="text-lg text-gray-990">
          Use Carousel to automate the data collection and analysis process, so
          you can deliver actionable insights to your clients faster.
        </p>
      </div>
      <div className="rounded-3xl bg-gray-100 p-10">
        <Image
          src="/images/optimize.png"
          height={329}
          width={205}
          alt=""
          className="w-full object-contain"
        />
        <div className="border-primary-purple-30 w-fit rounded-2xl border bg-primary-purple-10 px-2 py-0.5 text-xs font-bold text-primary-purple-70">
          Internal
        </div>
        <p className="my-3 text-2xl font-bold text-gray-990">
          Optimize Internal Knowledge Management
        </p>
        <p className="text-lg text-gray-990">
          Use Carousel to automatically update internal knowledge bases and
          reports, ensuring your teams access the latest insights and tools for
          better client outcomes.
        </p>
      </div>
    </div>
  );
};

export default Content;
