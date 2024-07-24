import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Finance = (props: IconProps) => {
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
        d="M6.87459 21.6134L2.66406 25.7397V13.8941H6.87459M13.8921 19.0309L11.6886 17.1502L9.68161 19.0029V8.28005H13.8921M20.9097 16.7011L16.6992 20.9116V2.66602H20.9097M24.8535 16.4344L22.3132 13.8941H29.3307V20.9116L26.8184 18.3993L16.6992 28.4344L11.829 24.1958L6.52371 29.3327H2.66406L11.7448 20.4344L16.6992 24.6169"
        fill="url(#paint0_linear_1_7321)"
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

export default Finance;
