/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ContentViewGallery = ({ color = "#4D4959", className }) => {
  return (
    <svg
      className={`content-view-gallery ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 6.75C3 4.67893 4.67893 3 6.75 3H21.25C23.3211 3 25 4.67893 25 6.75V21.25C25 23.3211 23.3211 25 21.25 25H6.75C4.67893 25 3 23.3211 3 21.25V6.75ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V21.25C4.5 22.4926 5.50736 23.5 6.75 23.5H16V4.5H6.75ZM21.25 23.5C22.4926 23.5 23.5 22.4926 23.5 21.25V18.5H17.5V23.5H21.25ZM23.5 17V11H17.5V17H23.5ZM23.5 9.5V6.75C23.5 5.50736 22.4926 4.5 21.25 4.5H17.5V9.5H23.5ZM7.75 7.5C7.05964 7.5 6.5 8.05964 6.5 8.75V12.25C6.5 12.9404 7.05964 13.5 7.75 13.5H12.75C13.4404 13.5 14 12.9404 14 12.25V8.75C14 8.05964 13.4404 7.5 12.75 7.5H7.75ZM8 12V9H12.5V12H8ZM6.5 16.25C6.5 15.8358 6.83579 15.5 7.25 15.5H13.25C13.6642 15.5 14 15.8358 14 16.25C14 16.6642 13.6642 17 13.25 17H7.25C6.83579 17 6.5 16.6642 6.5 16.25ZM7.25 19C6.83579 19 6.5 19.3358 6.5 19.75C6.5 20.1642 6.83579 20.5 7.25 20.5H13.25C13.6642 20.5 14 20.1642 14 19.75C14 19.3358 13.6642 19 13.25 19H7.25Z"
        fill={color}
      />
    </svg>
  );
};

ContentViewGallery.propTypes = {
  color: PropTypes.string,
};
