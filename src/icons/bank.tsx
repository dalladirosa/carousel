import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Bank = (props: IconProps) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M2.66406 29.3327H29.3307M2.66406 13.0364H29.3307M5.62703 7.11046L15.9974 2.66602L26.3678 7.11046M4.14554 13.0364V29.3327M27.8492 13.0364V29.3327M10.0715 18.9623V23.4068M15.9974 18.9623V23.4068M21.9233 18.9623V23.4068"
        stroke="url(#paint0_linear_1_7321)"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_7321"
          x1="15.9974"
          y1="2.66602"
          x2="15.9974"
          y2="29.3327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8479E2" />
          <stop offset="1" stopColor="#6050D7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Bank;
