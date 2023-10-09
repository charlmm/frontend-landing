/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icons16PxRemoveRound2 = ({ color = "#1A051D", className }) => {
  return (
    <svg
      className={`icons-16px-remove-round-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2ZM10.625 9.575L9.575 10.625L8 9.05L6.425 10.625L5.375 9.575L6.95 8L5.375 6.425L6.425 5.375L8 6.95L9.575 5.375L10.625 6.425L9.05 8L10.625 9.575Z"
        fill={color}
      />
    </svg>
  );
};

Icons16PxRemoveRound2.propTypes = {
  color: PropTypes.string,
};
