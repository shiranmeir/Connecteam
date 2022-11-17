import React from "react";

function ScrollArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="40"
      fill="none"
      viewBox="0 0 42 40"
    >
      <g filter="url(#filter0_b_7_33)">
        <rect
          width="42"
          height="40"
          fill="#fff"
          fillOpacity="0.01"
          rx="20"
        ></rect>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M30 13l-9 6-9-6"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M30 18l-9 6-9-6"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M30 23l-9 6-9-6"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_7_33"
          width="74"
          height="72"
          x="-16"
          y="-16"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="8"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_7_33"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_7_33"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default ScrollArrow;
