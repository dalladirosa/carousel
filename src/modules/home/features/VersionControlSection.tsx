import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import Statistic from '@/icons/Statistic';
import StatisticGray from '@/icons/StatisticGray';
import { cn } from '@/lib/utils';
import Card from '@/modules/home/features/card';
import { Clock3 } from 'lucide-react';
import { useState } from 'react';

export default function VersionControlSection() {
  const [isHighlight, setIsHighlight] = useState(false);
  const [isCurrentVersion, setIsCurrentVersion] = useState(true);

  return (
    <Card
      title="Version Control"
      imgUrl="/icons/version_control.svg"
      header="Don’t miss an update"
      subHeader="Track and highlight changes across different version of your document"
    >
      <div className="transition-all duration-500 group-hover:-translate-y-24">
        <div className="rounded-lg bg-white p-6 [box-shadow:0px_0px_0.78px_0px_#0000000A,0px_1.57px_4.71px_0px_#0000000A]">
          <p
            className={cn(
              'mb-6 border border-transparent px-1 text-lg font-bold text-[#000000]',
              isHighlight && 'border border-[#FF0000] bg-[#ED9D9D4D]',
            )}
          >
            {isCurrentVersion
              ? 'We experienced high-growth in Q4'
              : 'Q4 Review'}
          </p>

          <div className="flex flex-row items-center">
            <div>
              <p className="mb-4 text-xs font-bold">Key Highlights</p>

              <ol className="mr-10 list-outside list-decimal pl-4">
                <li className="text-xs">
                  Revenue Growth: Achieved a{' '}
                  <span
                    className={cn(
                      'border border-transparent',
                      isHighlight && 'border border-[#FF0000] bg-[#ED9D9D4D]',
                    )}
                  >
                    {' '}
                    {isCurrentVersion ? '15%' : 'XX%'}{' '}
                  </span>
                  increase in revenue compared to Q3.
                </li>
                <li className="text-xs">
                  Product Launch: Successfully launched our new product line,
                  resulting in a{' '}
                  <span
                    className={cn(
                      'border border-transparent',
                      isHighlight && 'border border-[#FF0000] bg-[#ED9D9D4D]',
                    )}
                  >
                    {' '}
                    {isCurrentVersion ? '25%' : 'XX%'}{' '}
                  </span>{' '}
                  increase in sales.
                </li>
                <li className="text-xs">
                  Market Expansion: Expanded into two new international markets,
                  exceeding our target for the quarter.
                </li>
              </ol>
            </div>
            <div
              className={cn(
                'border border-transparent p-2',
                isHighlight && 'border border-[#FF0000] bg-[#ED9D9D4D]',
              )}
            >
              {isCurrentVersion ? <Statistic /> : <StatisticGray />}
            </div>
          </div>
        </div>

        <div className="-translate-y-3 scale-110 rounded-lg bg-gradient-to-b from-[#FFFFFF1A] to-transparent p-[1px]">
          <div className="rounded-lg bg-white p-2 [box-shadow:0px_2px_6px_0px_#0000000A]">
            <div className="rounded-lg bg-gradient-to-b from-white to-transparent p-[1px]">
              <div className="flex flex-col rounded-lg bg-[#FFFFFFCC] py-4 [box-shadow:0px_0px_1px_0px_#0000000A,0px_2px_6px_0px_#0000000A,0px_6px_6px_0px_#0000000F]">
                <div className="mx-3 flex flex-row	items-center justify-center rounded-lg py-3 transition-all duration-300 hover:ring-1 hover:ring-primary-purple-20">
                  <Switch
                    checked={isHighlight}
                    onCheckedChange={() => setIsHighlight(!isHighlight)}
                    className="mr-2 rounded-full border transition-colors duration-300 data-[state=unchecked]:border-gray-300 data-[state=unchecked]:bg-gray-100"
                  />
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
                  <div
                    onClick={() => setIsCurrentVersion(false)}
                    className={cn(
                      'w-full rounded-lg p-3 leading-none ring-gray-200',
                      !isCurrentVersion && 'bg-[#FFFFFFCC] ring-1',
                    )}
                  >
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
                  <div
                    onClick={() => setIsCurrentVersion(true)}
                    className={cn(
                      'w-full rounded-lg p-3 leading-none ring-gray-200',
                      isCurrentVersion && 'bg-[#FFFFFFCC] ring-1',
                    )}
                  >
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
    </Card>
  );
}
