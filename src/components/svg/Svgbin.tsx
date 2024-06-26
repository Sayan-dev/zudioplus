import React from 'react';

interface Props {
  dimension?: string;
}
const Svgbin = ({ dimension = '24' }: Props) => (
  <svg
    width="12"
    height={dimension}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1.5" y="3.5" width="3" height="10" stroke="#9B9B9B" />
    <rect x="4.5" y="3.5" width="3" height="10" stroke="#9B9B9B" />
    <rect x="7.5" y="3.5" width="3" height="10" stroke="#9B9B9B" />
    <rect x="1" y="1" width="10" height="1" fill="#9B9B9B" />
    <rect y="2" width="1" height="1" fill="#9B9B9B" />
    <rect x="11" y="2" width="1" height="1" fill="#9B9B9B" />
    <rect x="4" width="4" height="1" fill="#9B9B9B" />
  </svg>
);

export default Svgbin;
