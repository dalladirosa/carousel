import React from 'react';

const Subscription = () => {
  return (
    <div className="border-gray-30 rounded-3xl border p-6">
      <div className="mb-6 border-b border-gray-300 pb-6">
        <p className="text-lg font-bold text-gray-990 md:text-2xl">
          Subscription
        </p>
        <p className="mt-2 text-sm text-gray-800">ID: 10298293</p>
      </div>
      <div className="mb-6 border-b border-gray-300 pb-6">
        <p className="text-base font-bold text-gray-990 md:text-lg">
          Current Plan
        </p>
        <p className="mt-2 text-sm text-gray-800">Your subscription renews:</p>
        <p className="mt-2 text-sm font-bold text-gray-990">
          September 21, 2024
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <p className="text-lg font-bold text-gray-990">Payment Method</p>
          <p className="text-center text-sm font-bold text-primary-purple-70">
            Add Payment Method
          </p>
        </div>
        <div className="mt-2 rounded-lg border border-gray-300 p-3">
          <p>•••9281</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
