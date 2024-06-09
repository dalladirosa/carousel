import React from 'react';

export default function RequestFeatureSection() {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[40px] bg-gradient-to-b from-[#fff] to-[rgba(255,255,255,0)] p-[1px]">
      <div className="relative h-full w-full overflow-hidden rounded-tl-[40px] rounded-tr-[40px] border border-[#E5E5E5] p-[2px]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E5E5E5] to-[#FFFFFF]"></div>
        <div className="relative h-full w-full rounded-tl-[40px] rounded-tr-[40px] bg-gray-200"></div>
      </div>

      <div className="absolute inset-1/2 z-10 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 flex-col items-center overflow-hidden rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#E5E5E5] p-1 [box-shadow:0_0_3.65px_0_#00000073,0_0_1.82px_0_#00000040]">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#F2F2F2] text-center">
          <p className="font-bold">More features coming soon</p>
          <p>or submit a request</p>
          <div className="flex w-[150px] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#E5E5E5] to-[#FFF] p-1">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFF] to-[#E5E5E5] p-1 [box-shadow:0_2px_4px_0p_#00000073,0_0_1px_0p_#00000040]">
              <button className="h-full w-full rounded-md bg-[#F2F2F2] py-1 text-center text-xs font-bold text-[#141414]">
                Request a Feature
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full overflow-hidden rounded-bl-[40px] rounded-br-[40px] border border-[#E5E5E5] p-[2px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5E5E5] to-[#FFFFFF]"></div>
        <div className="relative h-full w-full rounded-bl-[40px] rounded-br-[40px] bg-gray-200"></div>
      </div>
    </div>
  );
}
