/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo1 } from "../../icons/Logo1";
import "./style.css";

export const PropertyLogoWoWrapper = ({ property1, icon = <Logo1 className="logo-1" /> }) => {
  return (
    <div className={`property-logo-wo-wrapper ${property1}`}>
      {property1 === "logo-wo-subtitle" && (
        <div className="div">
          <img
            className="group"
            alt="Group"
            src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/group-7@2x.png"
          />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img
                className="retink"
                alt="Retink"
                src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/retink.svg"
              />
              <div className="rectangle" />
            </div>
          </div>
        </div>
      )}

      {property1 === "collapsed" && <>{icon}</>}
    </div>
  );
};

PropertyLogoWoWrapper.propTypes = {
  property1: PropTypes.oneOf(["logo-wo-subtitle", "collapsed"]),
};
