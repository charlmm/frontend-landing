/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ property1, property2, inactive = false, className, text = "Small Default" }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`frame inactive-${inactive}`}>
        <div className="text-wrapper">
          <div className="text">{text}</div>
        </div>
      </div>
    </button>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["s"]),
  property2: PropTypes.oneOf(["primary"]),
  inactive: PropTypes.bool,
  text: PropTypes.string,
};
