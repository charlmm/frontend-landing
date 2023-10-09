/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icons16PxArrowGlyphDown = ({ color = "#1D1437", className }) => {
  return (
    <svg
      className={`icons-16px-arrow-glyph-down ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.41496 6.65079L7.24074 11.1142C7.60017 11.5335 8.23147 11.5821 8.65079 11.2227C8.68967 11.1893 8.72593 11.1531 8.75926 11.1142L12.585 6.65079C12.9445 6.23147 12.8959 5.60017 12.4766 5.24074C12.2953 5.08539 12.0645 5 11.8258 5L4.17422 5C3.62194 5 3.17422 5.44772 3.17422 6C3.17422 6.23871 3.25961 6.46955 3.41496 6.65079Z"
        fill={color}
      />
    </svg>
  );
};

Icons16PxArrowGlyphDown.propTypes = {
  color: PropTypes.string,
};
