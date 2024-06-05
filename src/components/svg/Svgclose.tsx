import React from 'react';

interface Props {
  dimension?: string;
}
const Svgclose = ({ dimension = '24px' }: Props) => (
  <svg
    width={dimension}
    height={dimension}
    viewBox="0 0 17 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0.197247" y1="0.846085" x2="15.5888" y2="20.5464" stroke="black" strokeWidth="0.5" />
    <path d="M16.0431 1L0.651477 20.7002" stroke="black" strokeWidth="0.5" />
  </svg>
);

export default Svgclose;
