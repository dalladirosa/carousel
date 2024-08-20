'use client';

import Content from '@/modules/home/solutions/content';
import Navigations from '@/modules/home/solutions/navigations';
import Image from 'next/image';
import React from 'react';

const SolutionsSection = () => {
  const [scrollProgress, setScrollProgress] = React.useState(-100);
  const [current, setCurrent] = React.useState(0);

  return (
    <section className="container flex w-full flex-col items-center px-0 lg:px-8">
      <div className="flex w-full flex-col items-center rounded-[40px] px-6 py-6 lg:px-10">
        <div className="flex flex-col items-center p-4 pt-0 text-center">
          <div className="mx-auto w-fit overflow-auto rounded-full bg-gradient-to-br from-[#9D71FF]/30 to-[#4B78EC]/30 p-[1px]">
            <div className="mx-aitoitems-center flex flex-row rounded-full bg-gray-100 px-2.5 py-1 text-sm font-bold text-purple-70">
              <Image
                src="/icons/calculator.svg"
                width={16}
                height={16}
                alt=""
                className="mr-1.5"
              />
              Solutions
            </div>
          </div>
          <h1 className="mt-2 text-3xl text-gray-990 lg:text-5xl">
            Solutions for any team
          </h1>
        </div>

        <div className="gap-6 lg:grid lg:grid-cols-3">
          <Navigations
            scrollProgress={scrollProgress}
            setScrollProgress={setScrollProgress}
            current={current}
            setCurrent={setCurrent}
          />
          <Content current={current} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
