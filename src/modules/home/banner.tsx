import React from 'react';

const Banner = () => {
  return (
    <div className="relative z-[9999] lg:container">
      <div className="m-3 rounded-2xl bg-gray-990 lg:mx-12 lg:my-6 lg:rounded-full lg:px-[200px]">
        <p className="px-6 py-2 text-center text-base font-bold text-white lg:text-lg">
          Help us become the #1 tool for bankers & consultants and earn $50!{' '}
          <a href="/#" className="text-primary-purple-40 underline">
            Refer a Friend
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
