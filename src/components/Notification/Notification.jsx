/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Alert } from "../../icons/Alert";
import { Alert3 } from "../../icons/Alert3";
import "./style.css";

export const Notification = ({ property1, className, onClick }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "active",
  });

  return (
    <div
      className={`notification property-1-${state.property1} ${className}`}
      onClick={onClick}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["active", "hover"].includes(state.property1) && (
        <Alert3 className="instance-node" color={state.property1 === "active" ? "#5E3EBA" : "#4D4959"} />
      )}

      {state.property1 === "active" && <div className="hover-3" />}

      {state.property1 === "default" && <Alert className="instance-node" color="#4D4959" />}
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

Notification.propTypes = {
  property1: PropTypes.oneOf(["hover", "active", "default"]),
};
