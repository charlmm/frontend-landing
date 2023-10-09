/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DataTrending2 = ({ color = "#5E3EBA", className }) => {
  return (
    <svg
      className={`data-trending-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.25 4.25C5.25 3.69772 4.80228 3.25 4.25 3.25C3.69772 3.25 3.25 3.69772 3.25 4.25V18.25C3.25 19.6307 4.36929 20.75 5.75 20.75H19.75C20.3023 20.75 20.75 20.3023 20.75 19.75C20.75 19.1977 20.3023 18.75 19.75 18.75H5.75C5.47386 18.75 5.25 18.5261 5.25 18.25V4.25ZM14 7C14 6.44772 14.4477 6 15 6H19.5015C19.7667 6 20.0211 6.1054 20.2087 6.29301C20.3962 6.48062 20.5016 6.73505 20.5015 7.00033L20.5 11.5003C20.4998 12.0526 20.052 12.5002 19.4997 12.5C18.9474 12.4998 18.4998 12.052 18.5 11.4997L18.5007 9.41353L13.9571 13.9571C13.5666 14.3476 12.9334 14.3476 12.5429 13.9571L10.75 12.1642L8.20711 14.7071C7.81658 15.0976 7.18342 15.0976 6.79289 14.7071C6.40237 14.3166 6.40237 13.6834 6.79289 13.2929L10.0429 10.0429C10.4334 9.65237 11.0666 9.65237 11.4571 10.0429L13.25 11.8358L17.0858 8H15C14.4477 8 14 7.55228 14 7Z"
        fill={color}
      />
    </svg>
  );
};

DataTrending2.propTypes = {
  color: PropTypes.string,
};
