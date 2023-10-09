/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Size28ThemeFilled1 = ({ color = "#212121", className }) => {
  return (
    <svg
      className={`size-28-theme-filled-1 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.99982 10.124L13.654 15.6654C13.8708 15.7782 14.1291 15.7782 14.346 15.6654L25 10.125V19.75C25 21.483 23.6435 22.8992 21.9344 22.9949L21.75 23H6.24997C4.51694 23 3.10073 21.6435 3.00512 19.9344L2.99982 19.75V10.124ZM6.24997 5H21.75C23.483 5 24.8992 6.35646 24.9948 8.06558L25 8.25V8.434L14 14.1547L2.99982 8.434V8.25C2.99982 6.51697 4.35643 5.10075 6.06555 5.00514L6.24997 5H21.75H6.24997Z"
        fill={color}
      />
    </svg>
  );
};

Size28ThemeFilled1.propTypes = {
  color: PropTypes.string,
};
