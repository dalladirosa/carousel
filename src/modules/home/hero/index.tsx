import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Windows from '@/icons/Windows';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const DynamicSVGWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(100);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const animationRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    let startTime = 0;

    // const animate = (timestamp: number) => {
    //   if (!startTime) startTime = timestamp;
    //   let elapsedTime = (timestamp - startTime) % 4000; // 3 seconds total cycle
    //   let progress;
    //
    //   if (elapsedTime <= 2000) progress = elapsedTime / 2000;
    //   // Delay phase (2 seconds)
    //   else progress = 1;
    //
    //   const newY1 = progress * 100;
    //   let newY2 = Math.max(0, newY1 - 30);
    //
    //   // Remove the difference when y1 is over 70%
    //   if (newY1 === 100) newY2 = Math.min(100, newY1);
    //
    //   setY1(newY1);
    //   setY2(newY2);
    //
    //   animationRef.current = requestAnimationFrame(animate);
    // };
    //
    // animationRef.current = requestAnimationFrame(animate);
    //
    // return () => {
    //   if (animationRef.current) cancelAnimationFrame(animationRef.current);
    // };
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (boxRef.current) {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const padding = 10;
  const borderRadius = 2; // Added border radius

  return (
    <div className="relative">
      <svg
        width={dimensions.width + padding * 2}
        height={dimensions.height + padding * 2}
        className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded lg:block"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            {/*<stop offset="0%" stopColor="#00ff00" stopOpacity="0" />*/}
            <stop offset="50%" stopColor="#00ff00" stopOpacity="1" />
            {/*<stop offset="100%" stopColor="#00ff00" stopOpacity="0" />*/}
          </linearGradient>
          <linearGradient id="grad2" x1="0" x2="0" y1={`${y1}%`} y2={`${y2}%`}>
            <stop stop-color="#9c40ff" stop-opacity="0"></stop>
            <stop stop-color="#9c40ff"></stop>
            <stop offset="0.325" stop-color="#ffaa40"></stop>
            <stop offset="1" stop-color="#9c40ff" stop-opacity="0"></stop>
          </linearGradient>
        </defs>

        {/* Background rectangle */}
        <rect
          x={padding}
          y={padding}
          width={dimensions.width}
          height={dimensions.height}
          fill="none"
          stroke="#00ff00"
          strokeWidth="2"
          strokeOpacity="0"
          rx={borderRadius}
          ry={borderRadius}
        />
        {/* Animated paths */}
        <path
          d={`M${padding + dimensions.width / 2} 0 
             V${padding + borderRadius}
             Q${padding} ${padding} ${padding} ${padding + borderRadius}
             V${dimensions.height + padding - borderRadius}
             Q${padding} ${dimensions.height + padding} ${padding + borderRadius} ${dimensions.height + padding}
             H${padding + dimensions.width / 2} 
             V${dimensions.height + padding * 2}`}
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="2"
          // filter="url(#glow)"
          // className="animate-glow"
        />
        <path
          d={`M${padding + dimensions.width / 2} 0 
             V${padding + borderRadius}
             Q${padding + dimensions.width} ${padding} ${padding + dimensions.width} ${padding + borderRadius}
             V${dimensions.height + padding - borderRadius}
             Q${padding + dimensions.width} ${dimensions.height + padding} ${padding + dimensions.width - borderRadius} ${dimensions.height + padding}
             H${padding + dimensions.width / 2} 
             V${dimensions.height + padding * 2}`}
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="2"
          // filter="url(#glow)"
          // className="animate-glow"
        />

        {/*<path*/}
        {/*  d={`M${padding + dimensions.width / 2} 0 */}
        {/*     V${padding + borderRadius}*/}
        {/*     Q${padding} ${padding} ${padding} ${padding + borderRadius}*/}
        {/*     V${dimensions.height + padding - borderRadius}*/}
        {/*     Q${padding} ${dimensions.height + padding} ${padding + borderRadius} ${dimensions.height + padding}*/}
        {/*     H${padding + dimensions.width / 2} */}
        {/*     V${dimensions.height + padding * 2}`}*/}
        {/*  fill="none"*/}
        {/*  stroke="url(#grad2)"*/}
        {/*  strokeWidth="2"*/}
        {/*  // filter="url(#glow)"*/}
        {/*/>*/}
        {/*<path*/}
        {/*  d={`M${padding + dimensions.width / 2} 0 */}
        {/*     V${padding + borderRadius}*/}
        {/*     Q${padding + dimensions.width} ${padding} ${padding + dimensions.width} ${padding + borderRadius}*/}
        {/*     V${dimensions.height + 10 + padding - borderRadius}*/}
        {/*     Q${padding + dimensions.width} ${dimensions.height + padding} ${padding + dimensions.width - borderRadius} ${dimensions.height + padding}*/}
        {/*     H${padding + dimensions.width / 2} */}
        {/*     V${dimensions.height + 10 + padding * 2}`}*/}
        {/*  fill="none"*/}
        {/*  stroke="url(#grad2)"*/}
        {/*  strokeWidth="5"*/}
        {/*  // filter="url(#glow)"*/}
        {/*/>*/}
      </svg>
      <div ref={boxRef}>{children}</div>
    </div>
  );
};

const shimmerButtonStyle = {
  '--spread': '90deg',
  '--shimmer-color': '#ffffff',
  '--radius': '100px',
  '--speed': '3s',
  '--cut': '0.05em',
  '--bg': 'rgba(0, 0, 0, 1)',
};
export default function HeroSection() {
  const searchParams = useSearchParams();

  const type = searchParams.get('type') as 'professional' | 'enterprise' | null;

  const CONTENT = {
    professional: {
      title: (
        <>
          Now you can make decks,
          <br /> models, & memos <b className="text-purple-60">5x faster</b>
        </>
      ),
      desc: (
        <>
          Carousel&apos;s PowerPoint & Excel add-ins cut tedious deck-building &{' '}
          <br />
          modeling tasks down to a couple clicks.
        </>
      ),
    },
    enterprise: {
      title: (
        <>
          Successfully manage <b className="text-purple-60">twice as many</b>{' '}
          <br /> deals clients, or LP relationships.
        </>
      ),
      desc: (
        <>
          Carousel enables you to turn your client deliverables around in half
          the time without <br /> compromising on quality, freeing you up to
          find & close your next deal, client, or LP
        </>
      ),
    },
  };

  return (
    <section className="container -mt-10 flex w-full flex-col items-center px-0 lg:-mt-6 lg:px-8">
      <div className="w-full rounded-3xl rounded-t-[2.5rem] bg-primary-purple-45">
        {/* TODO: Add Animation */}
        <div className="px-6 py-10 lg:px-10 lg:py-[52px]">
          <h1 className="text-center text-4xl font-bold leading-none text-[#111827] lg:text-6xl">
            {CONTENT?.[type ?? 'professional'].title}
          </h1>
          <p className="mt-6 text-center text-lg text-gray-900 lg:text-xl">
            {CONTENT?.[type ?? 'professional'].desc}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 px-6 lg:flex-row lg:gap-3 lg:px-0">
            {(type ?? 'professional') === 'professional' && (
              <Button className="before:contents[''] relative w-full gap-2 bg-gradient-to-b from-purple-60 to-purple-70 px-6 text-white shadow-[0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F,0px_0.89px_1.34px_0px_#FFFFFF99_inset] before:absolute before:right-0 before:top-0 before:shadow-[inset_0_0_0_0.8px_linear-gradient(to_bottom,_#fff_53%,_#fff_0%)] lg:w-fit">
                Download for Windows <Windows width={21} height={21} />
              </Button>
            )}
            <Dialog>
              <DialogTrigger asChild>
                {type === 'enterprise' ? (
                  <Button className="before:contents[''] relative w-full gap-2 bg-gradient-to-b from-purple-60 to-purple-70 px-6 text-white shadow-[0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F,0px_0.89px_1.34px_0px_#FFFFFF99_inset] before:absolute before:right-0 before:top-0 before:shadow-[inset_0_0_0_0.8px_linear-gradient(to_bottom,_#fff_53%,_#fff_0%)] lg:w-fit">
                    Schedule a Demo
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full gap-1 rounded-lg border border-gray-600/30 bg-white text-gray-800 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)] lg:w-fit"
                  >
                    Schedule a Demo
                  </Button>
                )}
              </DialogTrigger>
              <DialogContent className="container h-full max-h-[80vh] max-w-screen-lg">
                <iframe
                  src="https://calendly.com/daniel-carouseltech/30-minute-meeting-clone"
                  className="h-full w-full"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/*<div className="relative">*/}
        {/*<div className="test-10 absolute right-1/2 top-0 h-full translate-x-1/2 p-px">*/}
        {/*  <div />*/}
        {/*</div>*/}

        {/*<div className="relative mx-auto flex w-fit flex-col items-center justify-evenly px-6 py-10 lg:px-0">*/}
        {/*  <div className="relative rounded-[2rem] border-2 border-black-30 bg-primary-purple-45 p-2">*/}
        {/*    <div className="rounded-3xl border border-purple-15 bg-white px-6 py-4 shadow-[0px_6px_6px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] ">*/}
        {/*      <div className="test-99"></div>*/}
        {/*      <p className="mb-6 text-center text-lg font-bold text-gray-600">*/}
        {/*        Powering teams at*/}
        {/*      </p>*/}
        {/*      <div className="grid grid-cols-2-356 items-center gap-8 lg:flex-row lg:gap-10">*/}
        {/*        <div className="flex flex-col items-center">*/}
        {/*          <Image*/}
        {/*            src="/images/capstone.png"*/}
        {/*            alt="capstone"*/}
        {/*            width={267}*/}
        {/*            height={30}*/}
        {/*          />*/}
        {/*          <span className="mt-3 text-gray-600">Consulting Teams</span>*/}
        {/*        </div>*/}
        {/*        <div className="flex flex-col items-center">*/}
        {/*          <Image*/}
        {/*            src="/images/voi.png"*/}
        {/*            alt="voi"*/}
        {/*            width={96}*/}
        {/*            height={30}*/}
        {/*          />*/}
        {/*          <span className="mt-3 text-gray-600">*/}
        {/*            Corporate Finance Teams*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  /!*<div className="neon absolute top-9 flex w-full flex-row items-center justify-center">*!/*/}
        {/*  /!*  <Neon />*!/*/}
        {/*  /!*</div>*!/*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <button*/}
        {/*    className="dark:text-black group relative z-0 flex transform-gpu cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white shadow-2xl transition-transform duration-300 ease-in-out [background:var(--bg)] [border-radius:var(--radius)] active:translate-y-[1px]"*/}
        {/*    style={shimmerButtonStyle}*/}
        {/*  >*/}
        {/*    <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">*/}
        {/*      <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">*/}
        {/*        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">*/}
        {/*      Shimmer Button*/}
        {/*    </span>*/}
        {/*    <div className="insert-0 absolute h-full w-full transform-gpu rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>*/}
        {/*    <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>*/}
        {/*  </button>*/}
        {/*</div>*/}

        <div className="mx-auto w-fit">
          <DynamicSVGWrapper>
            <div className="relative mb-8 flex flex-col items-center justify-center overflow-hidden rounded-[2rem] p-2 lg:border lg:bg-primary-purple-45">
              <div className="rounded-3xl px-6 py-4 lg:border lg:border-purple-15 lg:bg-white">
                <p className="mb-6 text-center text-sm text-[#000] lg:text-lg lg:font-bold lg:text-gray-600">
                  Powering teams at
                </p>
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2-356">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/capstone.png"
                      alt="capstone"
                      width={267}
                      height={30}
                    />
                    <span className="mt-3 text-gray-600">Consulting Teams</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/voi.png"
                      alt="voi"
                      width={96}
                      height={30}
                    />
                    <span className="mt-3 text-gray-600">
                      Corporate Finance Teams
                    </span>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 hidden rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] lg:block" />
            </div>
          </DynamicSVGWrapper>
        </div>
      </div>
    </section>
  );
}
