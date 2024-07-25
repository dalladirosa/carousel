import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const ArrowRight = (props: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14Z"
        fill="#6050D7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1313 5.50628C15.473 5.16457 16.027 5.16457 16.3687 5.50628L24.2437 13.3813C24.5854 13.723 24.5854 14.277 24.2437 14.6187L16.3687 22.4937C16.027 22.8354 15.473 22.8354 15.1313 22.4937C14.7896 22.152 14.7896 21.598 15.1313 21.2563L22.3876 14L15.1313 6.74372C14.7896 6.40201 14.7896 5.84799 15.1313 5.50628Z"
        fill="#6050D7"
      />
    </svg>
  );
};

export default ArrowRight;
