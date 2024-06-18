import React from 'react';

const Icon = ({ icon, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon} fill="currentColor" />
  </svg>
);

export default Icon;
