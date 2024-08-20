import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Windows from '@/icons/Windows';
import DialogRootAuth from '@/modules/download/plans/components/DialogRootAuth';
import Image from 'next/image';
import React from 'react';

const PlansSection = () => {
  return (
    <section className="container px-0 md:px-8">
      <div className="mx-auto flex w-fit items-center gap-1 rounded-2xl border border-purple-15 bg-gray-100 px-2 py-1">
        <Image src="/icons/rocket.svg" width={16} height={16} alt="" />
        <span className="text-sm font-bold text-primary-purple-70">
          Our Plans
        </span>
      </div>

      <div className="mb-6 mt-2 lg:mb-12">
        <h1 className="text-center text-3xl font-medium lg:text-5xl">
          Flexible Offerings for All Teams
        </h1>
      </div>

      <div className="mb-6 flex w-full flex-col gap-6 rounded-3xl bg-gradient-to-bl from-primary-purple-5 to-primary-purple-10 p-6 md:mx-auto md:w-fit md:flex-row">
        <div className="w-full rounded-3xl bg-white p-10 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)] md:w-fit">
          <div className="flex flex-col gap-y-4">
            <p className="text-2xl font-bold text-gray-990 md:text-3xl">Pro</p>
            <p className="text-4xl font-bold text-gray-990 md:text-6xl">$8</p>
            <p className="text-lg text-gray-800">per seat/month</p>
          </div>
          <div className="my-6 flex flex-col items-center gap-2 md:flex-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="before:contents[''] relative w-full gap-2 bg-gradient-to-b from-purple-60 to-purple-70 px-6 text-white shadow-[0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F,0px_0.89px_1.34px_0px_#FFFFFF99_inset] before:absolute before:right-0 before:top-0 before:shadow-[inset_0_0_0_0.8px_linear-gradient(to_bottom,_#fff_53%,_#fff_0%)] lg:w-fit">
                  Download <Windows width={21} height={21} />
                </Button>
              </DialogTrigger>
              <DialogRootAuth />
            </Dialog>

            <Button
              variant="secondary"
              className="w-full gap-1 rounded-lg border border-gray-600/30 bg-white text-gray-800 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)] md:w-fit"
            >
              For
              <Image
                src="/icons/apple_black.svg"
                width={28}
                height={28}
                alt=""
              />
            </Button>
          </div>
          <p className="text-lg">
            Carousel Pro offers access to all of the <br /> Microsoft Office
            add-ins in <br /> Carousel’s productivity suite.
          </p>
        </div>
        <div className="w-full rounded-3xl bg-white p-10 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)] md:w-fit">
          <div className="flex flex-col gap-y-4">
            <p className="text-2xl font-bold text-gray-990 md:text-3xl">
              Enterprise
            </p>
            <p className="text-4xl font-bold text-gray-990 md:text-6xl">
              Custom
            </p>
            <p className="text-lg text-gray-800">plans and offerings</p>
          </div>
          <div className="my-6 flex w-full flex-row items-center">
            <Button
              variant="secondary"
              className="w-full gap-1 rounded-lg border border-gray-600/30 bg-white font-bold text-gray-800 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-lg">
            Develop custom productivity toolkits <br /> and for your team and
            deploy them <br /> with upgraded security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
