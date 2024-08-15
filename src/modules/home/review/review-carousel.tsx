import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

type ReviewCarouselProps = {
  setApi: React.Dispatch<React.SetStateAction<CarouselApi>>;
};

const ReviewCarousel = ({ setApi }: ReviewCarouselProps) => {
  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem className="grid h-fit grid-cols-2 gap-10">
          <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-10 py-10 lg:px-20">
            <div className="mx-auto mb-10 flex w-fit flex-row items-center gap-2 rounded-full border border-[#9D71FF] bg-gray-100 px-2.5 py-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
            <p className="text-center text-lg text-gray-990 lg:text-2xl">
              &quot;<b className="text-purple-60">A game changer</b>... an{' '}
              <b className="text-purple-60">indispensable tool</b> for
              investment bankers/management consultants throughout the
              industry.&quot;
            </p>

            <p className="mt-6 text-center text-gray-500">
              Investment Banking Analyst, Middle Market
            </p>
          </div>
          <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-10 py-10 lg:px-20">
            <div className="mx-auto mb-10 flex w-fit flex-row items-center gap-2 rounded-full border border-[#9D71FF] bg-gray-100 px-2.5 py-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
            <p className="text-center text-lg text-gray-990 lg:text-2xl">
              &quot;Checks all the boxes in terms of what{' '}
              <b className="text-purple-60">
                makes my job more efficient and streamlined
              </b>
              , allowing me to spend more time doing what I actually enjoy -
              engaging with clients and actively working towards getting our
              deals closed. &quot;
            </p>
            <p className="mt-6 text-center text-gray-500">
              Investment Banking Analyst, Middle Market
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="grid h-fit grid-cols-2 gap-10">
          <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-10 py-10 lg:px-20">
            <div className="mx-auto mb-10 flex w-fit flex-row items-center gap-2 rounded-full border border-[#9D71FF] bg-gray-100 px-2.5 py-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
            <p className="text-center text-lg text-gray-990 lg:text-2xl">
              &quot;<b className="text-purple-60">A game changer</b>... an{' '}
              <b className="text-purple-60">indispensable tool</b> for
              investment bankers/management consultants throughout the
              industry.&quot;
            </p>

            <p className="mt-6 text-center text-gray-500">
              Investment Banking Analyst, Middle Market
            </p>
          </div>
          <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-10 py-10 lg:px-20">
            <div className="mx-auto mb-10 flex w-fit flex-row items-center gap-2 rounded-full border border-[#9D71FF] bg-gray-100 px-2.5 py-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
            <p className="text-center text-lg text-gray-990 lg:text-2xl">
              &quot;Checks all the boxes in terms of what{' '}
              <b className="text-purple-60">
                makes my job more efficient and streamlined
              </b>
              , allowing me to spend more time doing what I actually enjoy -
              engaging with clients and actively working towards getting our
              deals closed. &quot;
            </p>
            <p className="mt-6 text-center text-gray-500">
              Investment Banking Analyst, Middle Market
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="grid h-fit grid-cols-2 gap-10">
          <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-10 py-10 lg:px-20">
            <div className="mx-auto mb-10 flex w-fit flex-row items-center gap-2 rounded-full border border-[#9D71FF] bg-gray-100 px-2.5 py-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
            <p className="text-center text-lg text-gray-990 lg:text-2xl">
              &quot;<b className="text-purple-60">A game changer</b>... an{' '}
              <b className="text-purple-60">indispensable tool</b> for
              investment bankers/management consultants throughout the
              industry.&quot;
            </p>

            <p className="mt-6 text-center text-gray-500">
              Investment Banking Analyst, Middle Market
            </p>
          </div>
          <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-10 py-10 lg:px-20">
            <div className="mx-auto mb-10 flex w-fit flex-row items-center gap-2 rounded-full border border-[#9D71FF] bg-gray-100 px-2.5 py-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  alt=""
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </div>
            <p className="text-center text-lg text-gray-990 lg:text-2xl">
              &quot;Checks all the boxes in terms of what{' '}
              <b className="text-purple-60">
                makes my job more efficient and streamlined
              </b>
              , allowing me to spend more time doing what I actually enjoy -
              engaging with clients and actively working towards getting our
              deals closed. &quot;
            </p>
            <p className="mt-6 text-center text-gray-500">
              Investment Banking Analyst, Middle Market
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default React.memo(ReviewCarousel);
