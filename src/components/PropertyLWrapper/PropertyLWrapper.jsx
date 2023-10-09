/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyLWrapper = ({ property1, secondaryDisabled = false, className, text = "GHOST" }) => {
  return (
    <button className={`property-l-wrapper ${className}`}>
      <div className={`frame-wrapper secondary-disabled-${secondaryDisabled}`}>
        <div className="div-wrapper">
          <div className="text-2">{text}</div>
        </div>
      </div>
    </button>
  );
};

PropertyLWrapper.propTypes = {
  property1: PropTypes.oneOf(["l"]),
  secondaryDisabled: PropTypes.bool,
  text: PropTypes.string,
};
