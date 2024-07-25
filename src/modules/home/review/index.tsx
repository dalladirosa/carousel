import { CarouselApi } from '@/components/ui/carousel';
import ReviewCarousel from '@/modules/home/review/review-carousel';
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

  const updateProgress = React.useCallback(() => {
    if (!api) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    const durations = [5000, 5000, 5000];

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const currentDuration = durations[current];
      const newProgress = Math.min((elapsedTime / currentDuration) * 100, 100);

      setScrollProgress(newProgress);

      if (elapsedTime < currentDuration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setScrollProgress(0);
        handleScroll(api);
        startTime = null;

        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [current, api]);

  React.useEffect(() => {
    if (!api) return;

    api.on('scroll', (emblaApi) => {
      setScrollProgress(0);
      setCurrent(emblaApi.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const cleanup = updateProgress();
    return cleanup;
  }, [updateProgress]);

  return (
    <section className="container">
      <ReviewCarousel setApi={setApi} />
      <div className="mx-auto my-10 flex flex-row items-center justify-center gap-1">
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
    </section>
  );
};

export default ReviewSection;
