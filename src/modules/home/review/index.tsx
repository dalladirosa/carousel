import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React, { useEffect } from 'react';

const ReviewSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleScroll = (api: CarouselApi) => {
    if (api) {
      if (api.canScrollNext()) {
        setCurrent(api.selectedScrollSnap() + 1);
        api.scrollNext();
      } else {
        setCurrent(0);
        api.scrollTo(0);
      }
    }
  };

  const updateProgress = React.useCallback(
    (timestamp: number) => {
      if (!api) return;

      let startTime: number | null = null;
      let animationFrameId: number;
      const durations = [5000, 5000, 5000];

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const elapsedTime = time - startTime;
        const currentDuration = durations[current];
        const newProgress = Math.min(
          (elapsedTime / currentDuration) * 100,
          100,
        );

        setScrollProgress(newProgress);

        if (elapsedTime < currentDuration) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          handleScroll(api);
          setScrollProgress(0);
          startTime = null;

          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    },
    [current, api],
  );

  // useEffect(() => {
  //   setScrollProgress(0);
  // }, [current]);

  React.useEffect(() => {
    if (!api) return;

    api.on('scroll', (emblaApi) => {
      setCurrent(emblaApi.selectedScrollSnap());
      setScrollProgress(0);
    });
  }, [api]);

  useEffect(() => {
    const cleanup = updateProgress(performance.now());
    return cleanup;
  }, [updateProgress]);

  return (
    <div className="container my-10">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem className="grid h-fit grid-cols-2 gap-10">
            <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-20 py-10">
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
              <p className="text-center text-2xl text-gray-990">
                &quot;<b className="text-purple-60">A game changer</b>... an{' '}
                <b className="text-purple-60">indispensable tool</b> for
                investment bankers/management consultants throughout the
                industry.&quot;
              </p>

              <p className="mt-6 text-center text-gray-500">
                Investment Banking Analyst, Middle Market
              </p>
            </div>
            <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-20 py-10">
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
              <p className="text-center text-2xl text-gray-990">
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
            <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-20 py-10">
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
              <p className="text-center text-2xl text-gray-990">
                &quot;<b className="text-purple-60">A game changer</b>... an{' '}
                <b className="text-purple-60">indispensable tool</b> for
                investment bankers/management consultants throughout the
                industry.&quot;
              </p>

              <p className="mt-6 text-center text-gray-500">
                Investment Banking Analyst, Middle Market
              </p>
            </div>
            <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-20 py-10">
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
              <p className="text-center text-2xl text-gray-990">
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
            <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-20 py-10">
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
              <p className="text-center text-2xl text-gray-990">
                &quot;<b className="text-purple-60">A game changer</b>... an{' '}
                <b className="text-purple-60">indispensable tool</b> for
                investment bankers/management consultants throughout the
                industry.&quot;
              </p>

              <p className="mt-6 text-center text-gray-500">
                Investment Banking Analyst, Middle Market
              </p>
            </div>
            <div className="rounded-3xl border border-primary-purple-10 bg-primary-purple-5 px-20 py-10">
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
              <p className="text-center text-2xl text-gray-990">
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

      <div className="mx-auto mt-10 flex flex-row items-center justify-center gap-1">
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{
              transform: `translate3d(${current === 0 ? scrollProgress : current > 0 ? 100 : 0}%,0px,0px)`,
            }}
          />
        </div>
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{
              transform: `translate3d(${current === 1 ? scrollProgress : current > 1 ? 100 : 0}%,0px,0px)`,
            }}
          />
        </div>
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{
              transform: `translate3d(${current === 2 ? scrollProgress : current > 2 ? 100 : 0}%,0px,0px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

// Certainly! I'll update the component to use TypeScript, adding type definitions for the props and any other variables or functions within the component.
//
//
//
// ```
// import React, { useState, useEffect, useCallback } from 'react';
//
// interface MultiProgressBarCarouselProps {
//   durations: number[];
//   onComplete?: () => void;
// }
//
// const MultiProgressBarCarousel: React.FC<MultiProgressBarCarouselProps> = ({ durations, onComplete }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [progress, setProgress] = useState<number>(0);
//
//   const updateProgress = useCallback((timestamp: number) => {
//     let startTime: number | null = null;
//     let animationFrameId: number;
//
//     const animate = (time: number) => {
//       if (!startTime) startTime = time;
//       const elapsedTime = time - startTime;
//       const currentDuration = durations[currentIndex];
//       const newProgress = Math.min((elapsedTime / currentDuration) * 100, 100);
//
//       setProgress(newProgress);
//
//       if (elapsedTime < currentDuration) {
//         animationFrameId = requestAnimationFrame(animate);
//       } else {
//         // Move to the next item or reset to the beginning
//         const nextIndex = (currentIndex + 1) % durations.length;
//         setCurrentIndex(nextIndex);
//         setProgress(0);
//         startTime = null;
//
//         if (nextIndex === 0 && onComplete) {
//           onComplete();
//         }
//
//         animationFrameId = requestAnimationFrame(animate);
//       }
//     };
//
//     animationFrameId = requestAnimationFrame(animate);
//
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [currentIndex, durations, onComplete]);
//
//   useEffect(() => {
//     const cleanup = updateProgress(performance.now());
//     return cleanup;
//   }, [updateProgress]);
//
//   return (
//     <div className="w-full flex space-x-1">
//       {durations.map((duration, index) => (
//         <div key={index} className="flex-1 bg-gray-200 rounded-full h-2">
//           <div
//             className={`h-2 rounded-full transition-all duration-100 ease-linear ${
//               index === currentIndex ? 'bg-blue-600' :
//               index < currentIndex ? 'bg-blue-300' : 'bg-transparent'
//             }`}
//             style={{
//               width: index === currentIndex ? `${progress}%` :
//                      index < currentIndex ? '100%' : '0%'
//             }}
//           ></div>
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default MultiProgressBarCarousel;
// ```
//
// Here's a breakdown of the TypeScript additions and changes:
//
// 1. We've defined an interface `MultiProgressBarCarouselProps` for the component's props:
//    ```typescript
//    interface MultiProgressBarCarouselProps {
//      durations: number[];
//      onComplete?: () => void;
//    }
//    ```
//
// 2. The component is now declared as a `React.FC` (Function Component) with the props interface:
//    ```typescript
//    const MultiProgressBarCarousel: React.FC<MultiProgressBarCarouselProps> = ({ durations, onComplete }) => {
//      // ...
//    }
//    ```
//
// 3. We've added type annotations to the `useState` hooks:
//    ```typescript
//    const [currentIndex, setCurrentIndex] = useState<number>(0);
//    const [progress, setProgress] = useState<number>(0);
//    ```
//
// 4. The `updateProgress` function is now wrapped in a `useCallback` hook to optimize performance. It also includes type annotations for its parameters:
//    ```typescript
//    const updateProgress = useCallback((timestamp: number) => {
//      let startTime: number | null = null;
//      let animationFrameId: number;
//      // ...
//    }, [currentIndex, durations, onComplete]);
//    ```
//
// 5. The `animate` function inside `updateProgress` now has a type annotation for its `time` parameter:
//    ```typescript
//    const animate = (time: number) => {
//      // ...
//    };
//    ```
//
// These TypeScript additions provide better type safety and improved developer experience with autocompletion and type checking.
//
// To use this component in a TypeScript React application, you would do something like this:
//
// ```tsx
// import React from 'react';
// import MultiProgressBarCarousel from './MultiProgressBarCarousel';
//
// const App: React.FC = () => {
//   const handleCarouselComplete = () => {
//     console.log("Carousel cycle completed!");
//   };
//
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl mb-4">Carousel Progress</h1>
//       <MultiProgressBarCarousel
//         durations={[3000, 5000, 4000, 6000]}
//         onComplete={handleCarouselComplete}
//       />
//     </div>
//   );
// }
//
// export default App;
// ```
//
// This TypeScript version provides the same functionality as the JavaScript version, but with added type safety. The TypeScript compiler will now catch type-related errors, such as passing the wrong type of props to the component.
//
// Is there anything else you'd like me to explain or modify in this TypeScript version of the component?​​​​​​​​​​​​​​​​
