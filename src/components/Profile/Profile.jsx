/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ComponentsAvatar } from "../ComponentsAvatar";
import "./style.css";

export const Profile = ({ property1, className, onClick }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "active",
  });

  return (
    <div
      className={`profile property-1-0-${state.property1} ${className}`}
      onClick={onClick}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <ComponentsAvatar className="components-avatar-round-rectangle-s" />
      {state.property1 === "active" && <div className="hover-4" />}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "active",
        };

      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Profile.propTypes = {
  property1: PropTypes.oneOf(["hover", "active", "default"]),
};
