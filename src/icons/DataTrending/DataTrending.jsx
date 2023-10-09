/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DataTrending = ({ color = "#4D4959", className }) => {
  return (
    <svg
      className={`data-trending ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 4.25C5 3.83579 4.66421 3.5 4.25 3.5C3.83579 3.5 3.5 3.83579 3.5 4.25V18.75C3.5 19.7165 4.2835 20.5 5.25 20.5H19.75C20.1642 20.5 20.5 20.1642 20.5 19.75C20.5 19.3358 20.1642 19 19.75 19H5.25C5.11193 19 5 18.8881 5 18.75V4.25ZM14 6.75C14 6.33579 14.3358 6 14.75 6H19.7515C20.1657 6 20.5015 6.33578 20.5015 6.74999L20.5015 11.755C20.5015 12.1692 20.1658 12.505 19.7515 12.505C19.3373 12.505 19.0015 12.1692 19.0015 11.755L19.0015 8.55917L13.7803 13.7803C13.4874 14.0732 13.0126 14.0732 12.7197 13.7803L10.75 11.8107L7.53033 15.0303C7.23744 15.3232 6.76256 15.3232 6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697L10.2197 10.2197C10.5126 9.92678 10.9874 9.92678 11.2803 10.2197L13.25 12.1893L17.9393 7.5H14.75C14.3358 7.5 14 7.16421 14 6.75Z"
        fill={color}
      />
    </svg>
  );
};

DataTrending.propTypes = {
  color: PropTypes.string,
};
