import { Button } from '@/components/ui/button';
import Windows from '@/icons/Windows';
import React from 'react';

const Download = () => {
  return (
    <div className="border-gray-30 rounded-3xl border p-6">
      <p className="text-2xl font-bold text-gray-990">Download Carousel</p>
      <Button className="before:contents[''] relative mt-6 h-auto w-full gap-2 bg-gradient-to-b from-purple-60 to-purple-70 p-3.5 px-6 py-3 text-lg text-white shadow-[0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F,0px_0.89px_1.34px_0px_#FFFFFF99_inset] before:absolute before:right-0 before:top-0 before:shadow-[inset_0_0_0_0.8px_linear-gradient(to_bottom,_#fff_53%,_#fff_0%)] lg:w-fit">
        Download for Windows <Windows width={21} height={21} />
      </Button>
      <p className="mt-2 text-sm text-gray-990">
        27.8MB - Released on 07/27/2024
      </p>
    </div>
  );
};

export default Download;
