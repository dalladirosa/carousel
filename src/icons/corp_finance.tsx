import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const CorpFinance = (props: IconProps) => {
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
        d="M2.33325 1H17.0808L22.9999 6.91912V11.6667H27.3333C28.6219 11.6667 29.6666 12.7113 29.6666 14V31H14.3333V27.6667H2.33325V1ZM14.3333 25.6667V14C14.3333 12.7113 15.3779 11.6667 16.6666 11.6667H20.9999V7.74755L16.2524 3H4.33325V25.6667H14.3333ZM16.6666 13.6667C16.4825 13.6667 16.3333 13.8159 16.3333 14V29H27.6666V14C27.6666 13.8159 27.5173 13.6667 27.3333 13.6667H16.6666ZM13.3333 15.6667H6.66659V13.6667H13.3333V15.6667ZM13.3333 19H6.66659V17H13.3333V19ZM9.33325 22.3333H6.66659V20.3333H9.33325V22.3333Z"
        fill="url(#paint0_linear_1_7321)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3333 2V6C17.3333 6.36819 17.6317 6.66667 17.9999 6.66667H21.9999V8H17.9999C16.8953 8 15.9999 7.10457 15.9999 6V2H17.3333Z"
        fill="url(#paint0_linear_1_7321)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6666 15H26.3333V18.3333H17.6666V15Z"
        fill="url(#paint0_linear_1_7321)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3333 21.3333V20H18.6666V21.3333H17.3333ZM19.9999 21.3333V20H21.3333V21.3333H19.9999ZM22.6666 21.3333V20H23.9999V21.3333H22.6666ZM25.3333 21.3333V20H26.6666V21.3333H25.3333ZM17.3333 24V22.6667H18.6666V24H17.3333ZM19.9999 24V22.6667H21.3333V24H19.9999ZM22.6666 24V22.6667H23.9999V24H22.6666ZM25.3333 26.6667V22.6667H26.6666V26.6667H25.3333ZM17.3333 26.6667V25.3333H18.6666V26.6667H17.3333ZM19.9999 26.6667V25.3333H21.3333V26.6667H19.9999ZM22.6666 26.6667V25.3333H23.9999V26.6667H22.6666Z"
        fill="url(#paint0_linear_1_7321)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6667 8C16.6667 5.79086 14.8759 4 12.6667 4V8H16.6667Z"
        fill="url(#paint0_linear_1_7321)"
      />
      <path
        d="M15.3334 8C15.3334 9.47276 14.1395 10.6667 12.6667 10.6667C11.194 10.6667 10.0001 9.47276 10.0001 8C10.0001 6.52724 11.194 5.33333 12.6667 5.33333V4C10.4576 4 8.66675 5.79086 8.66675 8C8.66675 10.2091 10.4576 12 12.6667 12C14.8759 12 16.6667 10.2091 16.6667 8H15.3334Z"
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

export default CorpFinance;
