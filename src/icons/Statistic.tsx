import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Statistic = (props: IconProps) => {
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
        d="M64.1959 1.57861C64.1959 0.928687 63.669 0.401818 63.0191 0.401818H52.4279C51.778 0.401818 51.2511 0.928687 51.2511 1.57861C51.2511 2.22854 51.778 2.75541 52.4279 2.75541H61.8423V12.1698C61.8423 12.8197 62.3692 13.3466 63.0191 13.3466C63.669 13.3466 64.1959 12.8197 64.1959 12.1698V1.57861ZM7.75729 58.5047L63.8512 2.41073L62.187 0.746493L6.09305 56.8404L7.75729 58.5047Z"
        fill="#E5E7EB"
      />
      <rect
        x="0.0605469"
        y="92.1919"
        width="16.4751"
        height="73.7459"
        fill="#8479E2"
      />
      <rect
        x="26.7346"
        y="71.0093"
        width="16.4751"
        height="94.9282"
        fill="#6050D7"
      />
      <rect
        x="53.4086"
        y="27.0757"
        width="16.4751"
        height="138.862"
        fill="#3B28CC"
      />
    </svg>
  );
};

export default Statistic;
