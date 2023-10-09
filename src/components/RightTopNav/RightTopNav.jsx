/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Calender } from "../Calender";
import { Notification } from "../Notification";
import { Profile } from "../Profile";
import "./style.css";

export const RightTopNav = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`right-top-nav ${className}`}>
      <div className="frame-2">
        <Calender
          className={`${["default", "notification", "profile"].includes(state.property1) && "class"}`}
          onClick={() => {
            dispatch("click");
          }}
          property1={state.property1 === "callender" ? "selected" : "default"}
        />
        <Notification
          className={`${["callender", "default", "profile"].includes(state.property1) && "class"}`}
          onClick={() => {
            dispatch("click_295");
          }}
          property1={state.property1 === "notification" ? "active" : "default"}
        />
        <Profile
          className={`${["callender", "default", "notification"].includes(state.property1) && "class"}`}
          onClick={() => {
            dispatch("click_297");
          }}
          property1={state.property1 === "profile" ? "active" : "default"}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "callender",
      };

    case "click_295":
      return {
        ...state,
        property1: "notification",
      };

    case "click_297":
      return {
        ...state,
        property1: "profile",
      };
  }

  return state;
}

RightTopNav.propTypes = {
  property1: PropTypes.oneOf(["profile", "notification", "callender", "default"]),
};
