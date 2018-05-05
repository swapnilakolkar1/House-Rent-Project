import React from "react";
import House from "../House";
import "./main-page.css";
const FeaturedHouse = props => {
  if (props.house) {
    return (
      <div>
        <div className="row feturedHouse">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center subtitle1">
            <h3>Featured House</h3>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <House house={props.house} />
          </div>
        </div>
      </div>
    );
  }
  return <div>no feature House Available</div>;
};

export default FeaturedHouse;
