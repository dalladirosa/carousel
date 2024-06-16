import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import FindLogos from '@/icons/find_logos.svg';
import Play from '@/icons/play.svg';
import Shuffle from '@/icons/shuffle.svg';
import TrackChanges from '@/icons/track_changes.svg';
import VersionHistory3D from '@/icons/version_history3d.svg';
import { Pause } from 'lucide-react';
import React, { useLayoutEffect, useRef, useState } from 'react';

const ActionSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handlePause = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) videoRef.current.currentTime = time;
  };

  const handleAccordionChange = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const newTime =
      (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
    handleSeek(newTime);
  };

  useLayoutEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };

    const handlePlay = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('play', handlePlay);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.removeEventListener('play', handlePlay);
      }
    };
  }, []);

  return (
    <section className="container mt-20" id="action-section">
      <div className="rounded-[40px] bg-gradient-to-b from-[#8479E2] to-[#6050D7] pt-10 lg:p-20">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 rounded-xl bg-white px-2 py-1">
            <Play />
            <span className="text-sm font-bold text-primary-purple-70">
              Watch this
            </span>
          </div>
        </div>
        <div className="pt-2 text-center text-5xl text-white">
          See it in action
        </div>
        <div className="flex flex-row items-center gap-6 pt-12">
          <div className="rounded-[40px] bg-gray-990 lg:w-[440px]">
            <Accordion
              type="single"
              defaultValue="trackChange"
              onValueChange={handleAccordionChange}
            >
              <AccordionItem
                value="trackChange"
                className="border-b border-gray-800 px-10"
              >
                <AccordionTrigger isHideIcon>
                  <p className="text-2xl font-normal text-[#8479E2]">
                    Track Changes
                  </p>
                  <TrackChanges />
                </AccordionTrigger>
                <AccordionContent className="pb-0 text-gray-300">
                  <div className="text-3xl">
                    Track changes from previous drafts with one click
                  </div>
                  <div className="py-2 text-xl">
                    Rewind your deck or model&apos;s history.
                  </div>
                  <div>
                    Our tool tracks every edit, ensuring that your file edits
                    are saved and documented with every keystroke.
                  </div>
                  <div className="mt-12 flex items-center gap-3 pl-4">
                    {currentTime > 0 &&
                    !videoRef?.current?.paused &&
                    !videoRef?.current?.ended &&
                    (videoRef?.current?.readyState ?? 0) > 2 ? (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePause}
                      >
                        <Pause
                          fill="#6050D7"
                          color="#6050D7"
                          width={18}
                          height={18}
                        />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePlay}
                      >
                        <Play width={18} height={18} />
                      </Button>
                    )}

                    <Shuffle />
                  </div>
                  <div
                    className="mx-auto h-1.5 w-[360px] cursor-pointer overflow-hidden rounded-t-xl bg-gray-700"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full rounded-tl-xl bg-purple-60"
                      style={{
                        width: `${(currentTime / duration) * 100 || 0}%`,
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="collaborate"
                className="border-b border-gray-800 px-10"
              >
                <AccordionTrigger isHideIcon>
                  <p className="text-2xl font-normal text-[#8479E2]">
                    Collaborate
                  </p>
                  <VersionHistory3D />
                </AccordionTrigger>
                <AccordionContent className="pb-0 text-gray-300">
                  <div className="text-3xl">
                    Track changes from previous drafts with one click
                  </div>
                  <div className="py-2 text-xl">
                    Rewind your deck or model&apos;s history.
                  </div>
                  <div>
                    Our tool tracks every edit, ensuring that your file edits
                    are saved and documented with every keystroke.
                  </div>
                  <div className="mt-12 flex items-center gap-3 pl-4">
                    {currentTime > 0 &&
                    !videoRef?.current?.paused &&
                    !videoRef?.current?.ended &&
                    (videoRef?.current?.readyState ?? 0) > 2 ? (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePause}
                      >
                        <Pause
                          fill="#6050D7"
                          color="#6050D7"
                          width={18}
                          height={18}
                        />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePlay}
                      >
                        <Play width={18} height={18} />
                      </Button>
                    )}

                    <Shuffle />
                  </div>
                  <div
                    className="mx-auto h-1.5 w-[360px] cursor-pointer overflow-hidden rounded-t-xl bg-gray-700"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full rounded-tl-xl bg-purple-60"
                      style={{
                        width: `${(currentTime / duration) * 100}%`,
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="StopVersioning"
                className="border-b border-gray-800 px-10"
              >
                <AccordionTrigger isHideIcon>
                  <p className="text-2xl font-normal text-[#8479E2]">
                    Stop Versioning Up
                  </p>
                  <VersionHistory3D />
                </AccordionTrigger>
                <AccordionContent className="pb-0 text-gray-300">
                  <div className="text-3xl">
                    Track changes from previous drafts with one click
                  </div>
                  <div className="py-2 text-xl">
                    Rewind your deck or model&apos;s history.
                  </div>
                  <div>
                    Our tool tracks every edit, ensuring that your file edits
                    are saved and documented with every keystroke.
                  </div>
                  <div className="mt-12 flex items-center gap-3 pl-4">
                    {currentTime > 0 &&
                    !videoRef?.current?.paused &&
                    !videoRef?.current?.ended &&
                    (videoRef?.current?.readyState ?? 0) > 2 ? (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePause}
                      >
                        <Pause
                          fill="#6050D7"
                          color="#6050D7"
                          width={18}
                          height={18}
                        />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePlay}
                      >
                        <Play width={18} height={18} />
                      </Button>
                    )}

                    <Shuffle />
                  </div>
                  <div
                    className="mx-auto h-1.5 w-[360px] cursor-pointer overflow-hidden rounded-t-xl bg-gray-700"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full rounded-tl-xl bg-purple-60"
                      style={{
                        width: `${(currentTime / duration) * 100}%`,
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="findLogos"
                className="mb-8 border-b border-gray-800 px-10"
              >
                <AccordionTrigger isHideIcon>
                  <p className="text-2xl font-normal text-[#8479E2]">
                    Find Logos
                  </p>
                  <FindLogos />
                </AccordionTrigger>
                <AccordionContent className="pb-0 text-gray-300">
                  <div className="text-3xl">
                    Track changes from previous drafts with one click
                  </div>
                  <div className="py-2 text-xl">
                    Rewind your deck or model&apos;s history.
                  </div>
                  <div>
                    Our tool tracks every edit, ensuring that your file edits
                    are saved and documented with every keystroke.
                  </div>
                  <div className="mt-12 flex items-center gap-3 pl-4">
                    {currentTime > 0 &&
                    !videoRef?.current?.paused &&
                    !videoRef?.current?.ended &&
                    (videoRef?.current?.readyState ?? 0) > 2 ? (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePause}
                      >
                        <Pause
                          fill="#6050D7"
                          color="#6050D7"
                          width={18}
                          height={18}
                        />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        className="m-0 h-auto p-0"
                        onClick={handlePlay}
                      >
                        <Play width={18} height={18} />
                      </Button>
                    )}

                    <Shuffle />
                  </div>
                  <div
                    className="mx-auto h-1.5 w-[360px] cursor-pointer overflow-hidden rounded-t-xl bg-gray-700"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full rounded-tl-xl bg-purple-60"
                      style={{
                        width: `${(currentTime / duration) * 100}%`,
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div
            className="relative h-fit place-content-center overflow-hidden rounded-[2rem] border border-gray-200 p-3
            shadow-[0px_10.65754222869873px_21.32px_rgba(0,_0,_0,_0.03),_-1.0657542943954468px_-0.5328771471977234px_21.32px_rgba(255,_255,_255,_0.2)_inset]
            [background:linear-gradient(206.57deg,_rgba(255,_255,_255,_0.13),_rgba(255,_255,_255,_0.03)),_linear-gradient(153.43deg,_rgba(255,_255,_255,_0.06),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0)_57.29%,_rgba(255,_255,_255,_0.08))]"
          >
            <video
              ref={videoRef}
              width="780"
              controls
              className="rounded-[2rem]"
            >
              <source
                src="/videos/file_example_WEBM_640_1_4MB.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
