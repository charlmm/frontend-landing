/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Settings2 = ({ color = "#4D4959", className }) => {
  return (
    <svg
      className={`settings-2 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.6928 2.31143C15.8128 2.11478 14.9147 2.01041 14.0131 2C13.0891 2.01065 12.19 2.11498 11.3089 2.31131C10.9245 2.39697 10.637 2.71797 10.5933 3.11011L10.3844 4.98787C10.3244 5.52521 10.0133 6.00258 9.54617 6.27409C9.07696 6.54875 8.50793 6.58162 8.01296 6.36398L6.29276 5.60685C5.93492 5.44935 5.51684 5.53522 5.24971 5.82108C4.00637 7.15157 3.08038 8.74728 2.54142 10.4881C2.42513 10.8638 2.55914 11.272 2.87529 11.5051L4.40162 12.6305C4.83721 12.9512 5.09414 13.4597 5.09414 14.0006C5.09414 14.5415 4.83721 15.05 4.40219 15.3703L2.8749 16.4976C2.55922 16.7307 2.42533 17.1383 2.54122 17.5136C3.07924 19.2561 4.00474 20.8536 5.24806 22.1858C5.51493 22.4718 5.93281 22.558 6.29071 22.4009L8.01859 21.6424C8.51117 21.4269 9.07783 21.4585 9.54452 21.728C10.0112 21.9976 10.3225 22.473 10.3834 23.0093L10.5908 24.8855C10.6336 25.2729 10.9148 25.5917 11.2933 25.6819C13.0725 26.106 14.9263 26.106 16.7055 25.6819C17.084 25.5917 17.3651 25.2729 17.408 24.8855L17.6157 23.0065C17.675 22.4692 17.9858 21.9923 18.4529 21.7219C18.92 21.4514 19.4876 21.4197 19.9818 21.6364L21.7093 22.3947C22.0671 22.5518 22.4849 22.4657 22.7517 22.1799C23.9944 20.8491 24.9198 19.2536 25.4586 17.513C25.5748 17.1376 25.441 16.7296 25.1251 16.4964L23.5988 15.3697C23.1628 15.0488 22.9059 14.5402 22.9059 13.9994C22.9059 13.4585 23.1628 12.9499 23.5978 12.6297L25.1228 11.5034C25.4386 11.2702 25.5723 10.8623 25.4561 10.4869C24.9172 8.74605 23.9912 7.15034 22.7478 5.81984C22.4807 5.53399 22.0626 5.44812 21.7048 5.60562L19.9843 6.36288C19.769 6.45832 19.5385 6.50694 19.3055 6.50657C18.4387 6.50566 17.7116 5.85214 17.617 4.98931L17.4079 3.11011C17.3643 2.71817 17.077 2.39728 16.6928 2.31143ZM14 18C11.7909 18 10 16.2091 10 14C10 11.7909 11.7909 10 14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18Z"
        fill={color}
      />
    </svg>
  );
};

Settings2.propTypes = {
  color: PropTypes.string,
};
