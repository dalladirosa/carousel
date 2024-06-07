import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Clock3 } from 'lucide-react';

export default function VersionControlSection() {
  return (
    <div className="group overflow-auto rounded-[40px] bg-gradient-to-b from-[#fff] to-[rgba(255,255,255,0)] p-[1px] [box-shadow:0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]">
      <div className="h-full w-full rounded-[40px] bg-gray-100">
        <div className="items-center justify-center rounded-[40px] border-[1.5px] border-white bg-[#FFFFFF99] p-10">
          <div className="">
            <div className="flex flex-row items-center justify-center gap-1">
              <img src="/icons/version_control.svg" alt="" />
              <span className="font-bold text-gray-800">Version Control</span>
            </div>
            <div className="mt-6 text-center transition-all duration-500 group-hover:opacity-0">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Don’t miss an update
              </h1>
              <p className="font-normal text-gray-990">
                Track and highlight changes across different version of your
                document
              </p>
            </div>
          </div>

          <div className="transition-all duration-500 group-hover:-translate-y-24">
            <div className="mt-6 rounded-lg bg-white p-6 [box-shadow:0px_0px_0.78px_0px_#0000000A,0px_1.57px_4.71px_0px_#0000000A]">
              <p className="mb-6 text-lg font-bold text-[#000000]">
                We experienced high-growth in Q4
              </p>

              <div className="flex flex-row items-center">
                <div>
                  <p className="mb-4 text-xs font-bold">Key Highlights</p>

                  <ol className="mr-10 list-outside list-decimal pl-4">
                    <li className="text-xs">
                      Revenue Growth: Achieved a 15% increase in revenue
                      compared to Q3.
                    </li>
                    <li className="text-xs">
                      Product Launch: Successfully launched our new product
                      line, resulting in a 25% increase in sales.
                    </li>
                    <li className="text-xs">
                      Market Expansion: Expanded into two new international
                      markets, exceeding our target for the quarter.
                    </li>
                  </ol>
                </div>
                <img src="/icons/statistic.svg" alt="" />
              </div>
            </div>

            <div className="-translate-y-3 scale-110 rounded-lg bg-gradient-to-b from-[#FFFFFF1A] to-transparent p-[1px]">
              <div className="rounded-lg bg-white p-2 [box-shadow:0px_2px_6px_0px_#0000000A]">
                <div className="rounded-lg bg-gradient-to-b from-white to-transparent p-[1px]">
                  <div className="flex flex-col rounded-lg bg-[#FFFFFFCC] py-4 [box-shadow:0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]">
                    <div className="mx-3 flex flex-row	items-center justify-center rounded-lg py-3 transition-all duration-300 hover:ring-1 hover:ring-primary-purple-20">
                      <Switch className="mr-2 rounded-full border transition-colors duration-300 data-[state=unchecked]:border-gray-300 data-[state=unchecked]:bg-gray-100" />
                      <div className="bg-white px-[2px] py-[3px]">
                        <div className="mr-2 rounded border border-[#FF0000] bg-[#ED9D9D99] px-[5px] py-[3px] text-xs leading-none text-default-blue-50">
                          Aa
                        </div>
                      </div>
                      <span className="text-xs text-black-90">
                        Highlight Changes
                      </span>
                    </div>

                    <div className="mx-3 flex flex-row items-center gap-2 rounded-lg bg-[#00000005] p-1">
                      <div className="w-full rounded-lg p-3 leading-none ring-gray-200">
                        <div className="flex items-center space-x-2">
                          <Clock3
                            width="17.59"
                            height="17.59"
                            className="h-[17.59px] w-[17.59px] stroke-1	"
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Show Old Version
                          </label>
                        </div>
                      </div>
                      <div className="w-full rounded-lg bg-[#FFFFFFCC] p-3 leading-none ring-1 ring-gray-200">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked
                            className="data-[state=checked]:text-black border-[#000] data-[state=checked]:bg-transparent"
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Show Current Version
                          </label>
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
    </div>
  );
}
