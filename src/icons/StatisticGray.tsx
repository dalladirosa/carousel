import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const StatisticGray = (props: IconProps) => {
  const { width = 70, height = 166 } = props;

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
        d="M64.1955 1.57812C64.1955 0.928199 63.6687 0.401329 63.0187 0.401329H52.4276C51.7776 0.401329 51.2508 0.928199 51.2508 1.57812C51.2508 2.22805 51.7776 2.75492 52.4276 2.75492H61.8419V12.1693C61.8419 12.8192 62.3688 13.3461 63.0187 13.3461C63.6687 13.3461 64.1955 12.8192 64.1955 12.1693V1.57812ZM7.75692 58.5042L63.8508 2.41025L62.1866 0.746005L6.09268 56.8399L7.75692 58.5042Z"
        fill="#E5E7EB"
      />
      <rect
        x="0.0605469"
        y="92.1914"
        width="16.4751"
        height="73.7459"
        fill="#9CA3AF"
      />
      <rect
        x="26.7344"
        y="71.0098"
        width="16.4751"
        height="94.9282"
        fill="#9CA3AF"
      />
      <rect
        x="53.4082"
        y="27.0762"
        width="16.4751"
        height="138.862"
        fill="#9CA3AF"
      />
    </svg>
  );
};

export default StatisticGray;
