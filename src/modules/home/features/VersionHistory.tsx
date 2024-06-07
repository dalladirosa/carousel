import { Button } from '@/components/ui/button';
import { ChevronRight, CopyCheck, CopyPlus } from 'lucide-react';

export default function VersionHistorySection() {
  return (
    <div className="group overflow-hidden rounded-[40px] bg-gradient-to-b from-[#fff] to-[rgba(255,255,255,0)] p-[1px] [box-shadow:0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]">
      <div className="h-full w-full rounded-[40px] bg-gray-100">
        <div className="h-full items-center justify-center rounded-[40px] border-[1.5px] border-white bg-[#FFFFFF99] p-10">
          <div className="">
            <div className="flex flex-row items-center justify-center gap-1">
              <img src="/icons/version_history.svg" alt="" />
              <span className="font-bold text-gray-800">Version History</span>
            </div>
            <div className="mt-6 text-center transition-all duration-500 group-hover:opacity-0">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Stop "versioning up" constantly
              </h1>
              <p className="font-normal text-gray-990">
                Our tool tracks every edit, ensuring that your file edits are
                saved and documented with every keystroke.
              </p>
            </div>
          </div>

          <div className="relative ml-auto w-[400px] transition-all duration-500 group-hover:-translate-y-24">
            <div className="mt-6 rounded-lg bg-white p-6 pr-0 [box-shadow:0px_0px_0.78px_0px_#0000000A,0px_1.57px_4.71px_0px_#0000000A]">
              <p className="mb-6 text-lg font-bold text-[#000000]">
                Investment Strategy
              </p>

              <div className="mt-4 flex flex-row">
                <div className="mr-3 h-auto w-full border border-dashed border-[#000] p-3">
                  <ul>
                    <li>Click to add text</li>
                  </ul>
                </div>
                <img src="/icons/pie_chart.svg" alt="" />
              </div>
            </div>

            <div className="absolute z-0 h-[300px] w-[400px] scale-110 rounded-2xl bg-white/10 p-2 backdrop-blur-xl">
              <div className="inset-1/2 rounded-lg border border-white bg-[#FFFFFFCC] p-6">
                <p className="text-black-90">Version History</p>
                <div className="mt-2 grid w-fit grid-cols-2 gap-2 rounded-full border border-gray-300 bg-gray-100 p-1">
                  <div className="rounded-full bg-primary-purple-10 px-4 py-2 text-center text-xs font-bold text-primary-purple-70">
                    All Slides
                  </div>
                  <div className="rounded-full px-4 py-2 text-center text-xs font-bold text-gray-700">
                    Current Slide
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-2">
                  <div className="rounded-xl border border-gray-300 bg-white p-3">
                    <div className="flex flex-row items-center border-b border-gray-200 pb-3">
                      <div className="text-xs">
                        <span className="font-bold text-gray-900">
                          7:03 PM, Today
                        </span>{' '}
                        <span className="text-gray-600">by</span> {''}
                        <span className="text-gray-800">Wolf, Daniel</span>
                      </div>
                      <Button
                        variant="outline"
                        className="ml-auto h-auto px-3 py-1 text-xs leading-none"
                      >
                        View <ChevronRight className="size-4" />{' '}
                      </Button>
                    </div>
                    <div className="flex flex-row items-center pt-3">
                      <div className="mr-1 flex flex-row items-center bg-gray-100 px-2 py-1 ">
                        <CopyCheck className="size-4" />
                      </div>
                      <span className="mr-1 w-full flex-1 overflow-hidden truncate text-xs">
                        1, 2, 3, 10-12, 17-24, 28, 29, 30-33, 35-40, 42, 44-47,
                        49-52, 54, 55, 57-62, 64-68, 70-75, 77-82, 84, 86-91,
                        93-96, 98, 100
                      </span>
                      <ChevronRight className="mr-1 size-4" />
                      <div className="mr-1 flex flex-row items-center bg-gray-100 px-2 py-1">
                        <CopyPlus className="size-4" />
                        <span className="ml-1 text-xs">2</span>
                      </div>
                      <div className="flex flex-row items-center bg-gray-100 px-2 py-1">
                        <img
                          src="/icons/cool_icon.svg"
                          alt=""
                          className="size-4"
                        />
                        <span className="ml-1 text-xs">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-300 bg-white p-3">
                    <div className="flex flex-row items-center border-b border-gray-200 pb-3">
                      <div className="text-xs">
                        <span className="font-bold text-gray-900">
                          7:03 PM, Today
                        </span>{' '}
                        <span className="text-gray-600">by</span> {''}
                        <span className="text-gray-800">Wolf, Daniel</span>
                      </div>
                      <Button
                        variant="outline"
                        className="ml-auto h-auto px-3 py-1 text-xs leading-none"
                      >
                        View <ChevronRight className="size-4" />{' '}
                      </Button>
                    </div>
                    <div className="flex flex-row items-center pt-3">
                      <div className="mr-1 flex flex-row items-center bg-gray-100 px-2 py-1 ">
                        <CopyCheck className="size-4" />
                      </div>
                      <span className="mr-1 w-full flex-1 overflow-hidden truncate text-xs">
                        1, 2, 3, 10-12, 17-24, 28, 29, 30-33, 35-40, 42, 44-47,
                        49-52, 54, 55, 57-62, 64-68, 70-75, 77-82, 84, 86-91,
                        93-96, 98, 100
                      </span>
                      <ChevronRight className="mr-1 size-4" />
                      <div className="mr-1 flex flex-row items-center bg-gray-100 px-2 py-1">
                        <CopyPlus className="size-4" />
                        <span className="ml-1 text-xs">2</span>
                      </div>
                      <div className="flex flex-row items-center bg-gray-100 px-2 py-1">
                        <img
                          src="/icons/cool_icon.svg"
                          alt=""
                          className="size-4"
                        />
                        <span className="ml-1 text-xs">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
