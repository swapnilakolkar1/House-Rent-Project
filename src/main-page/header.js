import React from "react";
import house from "./house.svg";
const HeaderComp = props => (
  <header className="row">
    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
      <img src={house} className="logo" alt="logo" />
    </div>

    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 mt-5 subtitle">
      {props.subtitle}
    </div>
  </header>
);

export default HeaderComp;
