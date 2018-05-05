import React, { Component } from "react";
import "./house.css";
import emailIcon from "./email.svg";
import Inquiry from "./inquiry";

class House extends Component {
  state = { inquiryShown: false };
  inquiryToggle = () => {
    this.setState({ inquiryShown: !this.state.inquiryShown });
  };
  render() {
    const inquiry = this.state.inquiryShown ? <Inquiry house={house} /> : null;
    const house = this.props.house;
    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {house.country}
          </h5>
        </div>
        <div className="row">
          <h5 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {house.address}
          </h5>
        </div>

        <div className="row ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 displayFlex">
            <div className="widht-50">
              <img
                className="col-xs-12 col-sm-7 col-md-10 col-lg-12"
                src={
                  "https://images.pexels.com/photos/" +
                  house.photo +
                  ".jpeg?auto=compress&cs=tinysrgb&h=500&w=800"
                }
                alt="house"
              />
            </div>
            <div className="row widht-50 displayFlex">
              <img
                src={emailIcon}
                height="50"
                alt="inquiry"
                onClick={this.inquiryToggle}
              />
              {inquiry}
            </div>
          </div>
        </div>
        <div className="md-5">
          <p className="price">Rs. {house.price}</p>
          <p> {house.description}</p>
        </div>
      </div>
    );
  }
}

export default House;
