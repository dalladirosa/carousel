import ArrowRight from '@/icons/arrow-right';
import Lock from '@/icons/lock';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="container w-full p-0 lg:px-8">
      <div className="flex flex-col gap-10 py-6 lg:flex-row lg:p-10">
        <div className="flex flex-shrink-0 flex-col">
          <div className="mx-auto w-fit overflow-auto rounded-full bg-gradient-to-br from-[#9D71FF]/30 to-[#4B78EC]/30 p-[1px] lg:mx-0">
            <div className="flex flex-row items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-sm font-bold text-purple-70">
              <Image src="/icons/lightning.svg" width={16} height={16} alt="" />
              Features
            </div>
          </div>
          <p className="mt-2 text-center text-3xl text-gray-990 md:text-left md:text-5xl">
            A Complete Set <br /> of Features
          </p>
          <div className="mt-2 flex flex-col text-center text-lg md:text-left">
            <p>
              Our goal is to cut down tedious PowerPoint & <br /> Excel work
              down to the click of a button.
            </p>
            <br />
            <p>Can’t find what you’re looking for?</p>
            <br />
            <span className="text-lg font-bold text-primary-purple-70 underline">
              Request a feature here.
            </span>{' '}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-6 rounded-3xl border border-white bg-gray-100 p-10">
            <p className="text-center text-2xl font-bold">Features</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">Track Changes</p>
                  <p className="text-sm text-black-95/70">
                    Highlight everything your coworker changed in the deck since
                    you last worked on it
                  </p>
                </div>
                <Image src="/icons/check.svg" width={32} height={32} alt="" />
              </div>
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">LogoBox</p>
                  <p className="text-sm text-black-95/70">
                    Pull high-resolution, transparent-background SVG logos for{' '}
                    <b>ANY</b> company, not just Fortune 500s
                  </p>
                </div>
                <Image src="/icons/check.svg" width={32} height={32} alt="" />
              </div>
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">Slide Library</p>
                  <p className="text-sm text-black-95/70">
                    Save your favorite slides into an organized library & pull
                    them into future decks with one click
                  </p>
                </div>
                <Image src="/icons/check.svg" width={32} height={32} alt="" />
              </div>
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">Context Menu</p>
                  <p className="text-sm text-black-95/70">
                    Menu of advanced formatting tools like style-matching, grid
                    align, ring align, and autofit
                  </p>
                </div>
                <Image src="/icons/check.svg" width={32} height={32} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white bg-gray-100 p-10">
            <p className="text-center text-2xl font-bold">
              Coming Q3 & Q4 of 2024
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">AI Deck Editor</p>
                  <p className="text-sm text-black-95/70">
                    Auto-complete & edit slides with natural language. It’s like
                    having an intern make slides for you
                  </p>
                </div>
                <Image src="/icons/minus.svg" width={32} height={32} alt="" />
              </div>
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">Data Replacer</p>
                  <p className="text-sm text-black-95/70">
                    Replace chart & table data as it updates in Excel so your
                    deck is never out-of-date
                  </p>
                </div>
                <Image src="/icons/minus.svg" width={32} height={32} alt="" />
              </div>
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">Formatting Spellcheck</p>
                  <p className="text-sm text-black-95/70">
                    Check your deck for formatting mistakes & inconsistencies.
                    Then correct them with one click
                  </p>
                </div>
                <Image src="/icons/minus.svg" width={32} height={32} alt="" />
              </div>
              <div className="flex flex-row items-center gap-8">
                <div className="mr-auto">
                  <p className="text-lg text-black-99">Component Library</p>
                  <p className="text-sm text-black-95/70">
                    Instead of recreating shape styling from scratch, pull in
                    the shapes you’ve used before
                  </p>
                </div>
                <Image src="/icons/minus.svg" width={32} height={32} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
