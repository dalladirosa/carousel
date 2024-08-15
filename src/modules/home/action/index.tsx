import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Play from '@/icons/play.svg';
import Shuffle from '@/icons/shuffle.svg';
import { Pause } from 'lucide-react';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';

const CONTENTS = [
  {
    title: 'Version History',
    subTitle: "Rewind your deck or model's history.",
    desc: 'Our tool tracks every edit, ensuring that your file edits are saved and documented with every keystroke.',
    value: 'versionHistory',
    icon: '/icons/version_history3d.svg',
  },
  {
    title: 'Context Menu',
    subTitle: "Rewind your deck or model's history.",
    desc: 'Our tool tracks every edit, ensuring that your file edits are saved and documented with every keystroke.',
    icon: '/icons/version_history3d.svg',
    value: 'contextMenu',
  },
  {
    title: 'Data Linking',
    subTitle: "Rewind your deck or model's history.",
    desc: 'Our tool tracks every edit, ensuring that your file edits are saved and documented with every keystroke.',
    icon: '/icons/version_history3d.svg',
    value: 'dataLinking',
  },
  {
    title: 'Smart Assistant',
    subTitle: "Rewind your deck or model's history.",
    desc: 'Our tool tracks every edit, ensuring that your file edits are saved and documented with every keystroke.',
    icon: '/icons/version_history3d.svg',
    value: 'smartAssistant',
  },
  {
    title: 'LogoBox',
    subTitle: "Rewind your deck or model's history.",
    desc: 'Our tool tracks every edit, ensuring that your file edits are saved and documented with every keystroke.',
    icon: '/icons/version_history3d.svg',
    value: 'logoBox',
  },
  {
    title: 'Slide Library',
    subTitle: "Rewind your deck or model's history.",
    desc: 'Our tool tracks every edit, ensuring that your file edits are saved and documented with every keystroke.',
    icon: '/icons/version_history3d.svg',
    value: 'slideLibrary',
  },
];

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
    <section className="container px-0 lg:px-8" id="action-section">
      <div className="rounded-[40px] bg-gradient-to-b from-[#8479E2] to-[#6050D7] pt-10 lg:p-10">
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
        <div className="flex flex-row items-stretch gap-6 px-0 pt-10">
          <div className="w-full rounded-[40px] bg-gray-990 lg:w-[298px]">
            <Accordion
              type="single"
              defaultValue={CONTENTS[0].value}
              onValueChange={handleAccordionChange}
              className="p-6"
            >
              {CONTENTS.map((content, i) => (
                <AccordionItem
                  value={content.value}
                  key={content.value}
                  className="border-b border-gray-800"
                >
                  <AccordionTrigger isHideIcon className="py-4">
                    <p className="text-left text-2xl font-normal text-[#8479E2]">
                      {content.title}
                    </p>
                    <Image
                      src={content.icon}
                      width={28}
                      height={28}
                      alt=""
                      className="object-contain"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 pb-0 text-gray-300">
                    <div className="text-lg">{content.subTitle}</div>
                    <div>{content.desc}</div>
                    <div className="mt-6 hidden lg:flex lg:flex-col">
                      <div className="flex items-center gap-3">
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
                    </div>
                    <div className="my-6 lg:hidden">
                      <video
                        ref={videoRef}
                        controls
                        className="rounded-[2rem] object-cover"
                      >
                        <source
                          src="/videos/file_example_WEBM_640_1_4MB.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div
            className="hidden w-full place-content-center overflow-hidden rounded-[2rem] border border-gray-200 p-3 shadow-[0px_10.65754222869873px_21.32px_rgba(0,_0,_0,_0.03),_-1.0657542943954468px_-0.5328771471977234px_21.32px_rgba(255,_255,_255,_0.2)_inset]
            [background:linear-gradient(206.57deg,_rgba(255,_255,_255,_0.13),_rgba(255,_255,_255,_0.03)),_linear-gradient(153.43deg,_rgba(255,_255,_255,_0.06),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0)_57.29%,_rgba(255,_255,_255,_0.08))]
            lg:relative lg:flex"
          >
            <video
              ref={videoRef}
              controls
              className="rounded-[2rem] object-cover"
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
