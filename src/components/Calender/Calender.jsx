/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DirectionLtrSize24ThemeFilled } from "../../icons/DirectionLtrSize24ThemeFilled";
import { DirectionLtrSize28ThemeRegular } from "../../icons/DirectionLtrSize28ThemeRegular";
import "./style.css";

export const Calender = ({ property1, className, onClick }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`calender ${state.property1} ${className}`}
      onClick={onClick}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.property1 === "default" && <DirectionLtrSize28ThemeRegular className="calendar" color="#4D4959" />}

      {["hover", "selected"].includes(state.property1) && (
        <DirectionLtrSize24ThemeFilled
          className="calendar"
          color={state.property1 === "selected" ? "#5E3EBA" : "#4D4959"}
        />
      )}

      {state.property1 === "selected" && <div className="hover-2" />}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "selected",
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

Calender.propTypes = {
  property1: PropTypes.oneOf(["hover", "selected", "default"]),
};
