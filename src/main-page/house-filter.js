import React, { Component } from "react";

class HouseFilter extends Component {
  state = {};
  onSearchChange = e => {
    const city = e.target.value;
    this.props.filterHouses(city);
  };
  render() {
    const search = this.state.search;
    const cities = this.props.cities || [];
    return (
      <div className="form-group row mt-3">
        <div className="offset-md-2 col-md-4">
          Look for your dream house in India:
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={search}
            onChange={this.onSearchChange}
          >
            {cities.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default HouseFilter;
