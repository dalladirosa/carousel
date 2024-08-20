import { Button } from '@/components/ui/button';
import React from 'react';

const Refer = () => {
  return (
    <div className="my-6 flex flex-col gap-2 rounded-3xl border border-gray-300 bg-primary-purple-5 p-6 md:flex-row">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-gray-990">Refer a friend</p>
        <p className="text-sm text-gray-990">
          Get a friend to subscribe to and earn <b>$50</b>
        </p>

        <ul className="list-inside list-decimal text-sm text-gray-990">
          <li>Sign up for First Promoter account on their website.</li>
          <li>Generate your unique referral link from your dashboard.</li>
          <li>Share the link with friends to earn commissions.</li>
        </ul>
      </div>
      <Button
        className="mx-auto mt-6 w-full bg-transparent md:my-0 md:ml-auto md:w-fit"
        variant="outline"
      >
        Refer Friends
      </Button>
    </div>
  );
};

export default Refer;
