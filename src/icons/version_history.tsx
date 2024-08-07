import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const VersionHistory = (props: IconProps) => {
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
        d="M6.27926 28.0739L6.72559 26.4082L56.3466 39.7041L56.0325 40.8761C55.6629 42.2555 54.5859 43.3333 53.2066 43.7038L31.0616 49.6531C28.3316 50.3865 25.4172 49.6247 23.3952 47.6492L7.34759 31.9703C6.31353 30.96 5.90509 29.4703 6.27926 28.0739Z"
        fill="url(#paint0_linear_105_8894)"
      />
      <rect
        width={width}
        height={height}
        rx="4"
        transform="matrix(0.965926 -0.258819 0.707107 0.707107 4.76758 25.9102)"
        fill="#D9D9D9"
      />
      <rect
        width={width}
        height={height}
        rx="4"
        transform="matrix(0.965926 -0.258819 0.707107 0.707107 4.76758 25.9102)"
        fill="url(#paint1_linear_105_8894)"
      />
      <g filter="url(#filter0_bdi_105_8894)">
        <path
          d="M48.8568 32.0188L32.1222 27.5347L31.4727 29.959L48.2104 34.4311L48.8568 32.0188Z"
          fill="url(#paint2_linear_105_8894)"
          fill-opacity="0.5"
        />
      </g>
      <g filter="url(#filter1_d_105_8894)">
        <g filter="url(#filter2_bdi_105_8894)">
          <path
            d="M22.4646 30.1316L25.0528 20.4724L39.1949 34.6145L22.4646 30.1316Z"
            fill="url(#paint3_linear_105_8894)"
          />
          <path
            d="M22.4646 30.1316L25.0528 20.4724L39.1949 34.6145L22.4646 30.1316Z"
            fill="url(#paint4_linear_105_8894)"
            fill-opacity="0.6"
          />
          <path
            d="M22.4646 30.1316L25.0528 20.4724L39.1949 34.6145L22.4646 30.1316Z"
            fill="url(#paint5_linear_105_8894)"
            fill-opacity="0.25"
          />
          <path
            d="M22.8061 30.0401L25.2381 20.9638L38.5267 34.2524L22.8061 30.0401Z"
            stroke="url(#paint6_linear_105_8894)"
            stroke-opacity="0.5"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g filter="url(#filter3_bdi_105_8894)">
          <path
            d="M32.1238 27.5437L34.712 17.8845L48.8541 32.0266L32.1238 27.5437Z"
            fill="url(#paint7_linear_105_8894)"
          />
          <path
            d="M32.1238 27.5437L34.712 17.8845L48.8541 32.0266L32.1238 27.5437Z"
            fill="url(#paint8_linear_105_8894)"
            fill-opacity="0.6"
          />
          <path
            d="M32.1238 27.5437L34.712 17.8845L48.8541 32.0266L32.1238 27.5437Z"
            fill="url(#paint9_linear_105_8894)"
            fill-opacity="0.25"
          />
          <path
            d="M32.4653 27.4522L34.8973 18.3759L48.1859 31.6645L32.4653 27.4522Z"
            stroke="url(#paint10_linear_105_8894)"
            stroke-opacity="0.5"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <g filter="url(#filter4_bdi_105_8894)">
        <path
          d="M39.2143 34.6145L22.4797 30.1304L21.8301 32.5547L38.5679 37.0268L39.2143 34.6145Z"
          fill="url(#paint11_linear_105_8894)"
          fill-opacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_bdi_105_8894"
          x="15.301"
          y="11.3635"
          width="49.727"
          height="39.2387"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.08581" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_105_8894"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.02145" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_105_8894"
            result="effect2_dropShadow_105_8894"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_105_8894"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.202145" dy="-0.101073" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_105_8894"
          />
        </filter>
        <filter
          id="filter1_d_105_8894"
          x="18.4648"
          y="17.8848"
          width="34.3896"
          height="24.7295"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="overlay"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_105_8894"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_105_8894"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_bdi_105_8894"
          x="6.29323"
          y="4.30104"
          width="49.0737"
          height="46.4848"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.08581" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_105_8894"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.02145" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_105_8894"
            result="effect2_dropShadow_105_8894"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_105_8894"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.202145" dy="-0.101073" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_105_8894"
          />
        </filter>
        <filter
          id="filter3_bdi_105_8894"
          x="15.9524"
          y="1.71315"
          width="49.0737"
          height="46.4848"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.08581" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_105_8894"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.02145" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_105_8894"
            result="effect2_dropShadow_105_8894"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_105_8894"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.202145" dy="-0.101073" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_105_8894"
          />
        </filter>
        <filter
          id="filter4_bdi_105_8894"
          x="5.65846"
          y="13.9592"
          width="49.727"
          height="39.2387"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.08581" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_105_8894"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.02145" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_105_8894"
            result="effect2_dropShadow_105_8894"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_105_8894"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.202145" dy="-0.101073" />
          <feGaussianBlur stdDeviation="2.02145" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_105_8894"
          />
        </filter>
        <linearGradient
          id="paint0_linear_105_8894"
          x1="7.79156"
          y1="45.7812"
          x2="28.8487"
          y2="63.5838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BFB9F2" />
          <stop offset="1" stop-color="#6050D7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_105_8894"
          x1="16"
          y1="-0.630775"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A9A1ED" />
          <stop offset="1" stop-color="#3B28CC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_105_8894"
          x1="39.84"
          y1="32.201"
          x2="40.4895"
          y2="29.7767"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_105_8894"
          x1="20.2232"
          y1="21.7665"
          x2="24.7061"
          y2="38.4968"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.572917" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" stop-opacity="0.08" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_105_8894"
          x1="15.3936"
          y1="23.0605"
          x2="36.3065"
          y2="28.6641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.1" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_105_8894"
          x1="20.2232"
          y1="21.7665"
          x2="16.9879"
          y2="33.8405"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.5" />
          <stop offset="1" stop-color="white" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_105_8894"
          x1="20.2232"
          y1="21.7665"
          x2="24.7061"
          y2="38.4968"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_105_8894"
          x1="29.8824"
          y1="19.1786"
          x2="34.3652"
          y2="35.9089"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.572917" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" stop-opacity="0.08" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_105_8894"
          x1="25.0527"
          y1="20.4727"
          x2="45.9656"
          y2="26.0763"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.1" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_105_8894"
          x1="29.8824"
          y1="19.1786"
          x2="26.6471"
          y2="31.2526"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.5" />
          <stop offset="1" stop-color="white" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_105_8894"
          x1="29.8824"
          y1="19.1786"
          x2="34.3652"
          y2="35.9089"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_105_8894"
          x1="30.1974"
          y1="34.7967"
          x2="30.847"
          y2="32.3725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VersionHistory;
