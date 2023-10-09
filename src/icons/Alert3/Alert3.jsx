/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Alert3 = ({ color = "#5E3EBA", className }) => {
  return (
    <svg
      className={`alert-3 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.4656 22.0024C17.2225 23.6987 15.7635 25.0025 13.9999 25.0025C12.2364 25.0025 10.7774 23.6987 10.5343 22.0024H17.4656ZM13.9999 3C18.6097 3 22.3625 6.66899 22.4974 11.246V11.5012H22.5012L22.5009 15.613L23.915 19.2573C23.9531 19.3557 23.9789 19.4583 23.9919 19.5627L24.0016 19.7203C24.0016 20.383 23.4979 20.9281 22.8525 20.9937L22.7216 21.0003H5.27473C5.11602 21.0003 4.9587 20.9708 4.81078 20.9133C4.19311 20.673 3.86764 20.006 4.04049 19.3807L4.08177 19.2563L5.49794 15.612L5.4987 11.5012C5.4987 6.80614 9.30483 3 13.9999 3Z"
        fill={color}
      />
    </svg>
  );
};

Alert3.propTypes = {
  color: PropTypes.string,
};
