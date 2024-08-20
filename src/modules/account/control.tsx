import { Button } from '@/components/ui/button';
import React from 'react';

const Control = () => {
  return (
    <div className="mt-6">
      <p className="mb-6 text-4xl font-bold">Data Controls</p>

      <div className="border-gray-30 w-full rounded-3xl border p-6 md:w-[368px]">
        <div className="mb-6 flex flex-row items-center gap-6 border-b border-gray-300 pb-6">
          <p className="mt-2 text-sm text-gray-800">Export data</p>
          <Button variant="outline" className="ml-auto">
            Export
          </Button>
        </div>
        <div className="flex flex-row items-center gap-6">
          <p className="mt-2 text-sm text-gray-800">Delete data</p>
          <Button
            variant="outline"
            className="ml-auto border-[#E3022C] font-bold text-[#E3022C]"
          >
            Delete Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Control;
