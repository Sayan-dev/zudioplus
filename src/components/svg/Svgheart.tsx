import React from 'react';

interface Props {
  dimension?: string;
}
const Svgheart = ({ dimension = '19' }: Props) => (
  <svg
    width={dimension}
    height="17"
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.97453 2.38945L9.5 2.9865L10.0255 2.38945C10.9308 1.36084 12.3272 0.7 13.775 0.7C16.3319 0.7 18.3 2.63659 18.3 5.09537C18.3 6.60575 17.6079 8.03832 16.237 9.67391C14.859 11.318 12.8741 13.0771 10.4138 15.2527L10.4128 15.2536L9.5 16.064L8.58723 15.2536L8.58621 15.2527C6.12593 13.0771 4.14104 11.318 2.76304 9.67391C1.39214 8.03832 0.7 6.60575 0.7 5.09537C0.7 2.63659 2.66807 0.7 5.225 0.7C6.67284 0.7 8.06925 1.36084 8.97453 2.38945Z"
      stroke="black"
      strokeWidth="1.4"
    />
  </svg>
);

export default Svgheart;
