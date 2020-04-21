import React from "react";
import { NavLink } from "react-router-dom";

const logo = () => {
  return (
    <div>
      <NavLink to="/" exact>
        LOGO
      </NavLink>
    </div>
  );
};

export default logo;
