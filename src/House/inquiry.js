import React, { Component } from "react";

class Inquiry extends Component {
  state = {
    name: "",
    email: "",
    remark: ""
  };
  onNameChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };
  onemailChange = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };
  onremarkChange = e => {
    e.preventDefault();
    this.setState({ remark: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const house = this.props.house;
    const ContactInfo = this.state;
    //send
  };

  render() {
    return (
      <form className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="form-group">
          <label for="formGroupExampleInput">Name :</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your name..."
            onChange={this.onNameChange}
          />
        </div>
        <div class="form-group">
          <label for="inputEmail4">Email :</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Your email id...."
            onChange={this.onemailChange}
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Remark :</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Give Remark...."
            onChange={this.onremarkChange}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={
            this.state.name.length === 0 || this.state.email.length === 0
          }
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Inquiry;
