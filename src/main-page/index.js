import React, { Component } from "react";
import "./main-page.css";
import HeaderComp from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";
import House from "../House";
class App extends Component {
  state = {};
  componentDidMount() {
    debugger;
    this.fetchHouses();
  }
  fetchHouses = () => {
    fetch("./houses.json")
      .then(res => res.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.fetchRandomHouse();
        this.determineUniqueAddress();
      });
  };
  fetchRandomHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  };
  determineUniqueAddress = () => {
    const cities = this.allHouses
      ? Array.from(new Set(this.allHouses.map(h => h.address)))
      : [];
    cities.unshift(null);
    this.setState({ cities });
  };
  filterHouses = city => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allHouses.filter(h => h.address === city);
    this.setState({ filteredHouses });
    this.setState({ city });
  };
  setActiveHouse = house => {
    this.setState({ activeHouse: house });
  };

  render() {
    let activeComponent = null;
    if (this.state.city) {
      activeComponent = (
        <SearchResults
          city={this.state.city}
          filteredHouses={this.state.filteredHouses}
          setActiveHouse={this.setActiveHouse}
        />
      );
    }
    if (this.state.activeHouse) {
      activeComponent = <House house={this.state.activeHouse} />;
    }
    if (!activeComponent) {
      activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;
    }
    return (
      <div className="container">
        <HeaderComp subtitle={"Providing Houses On Rent"} />
        <HouseFilter
          cities={this.state.cities}
          filterHouses={this.filterHouses}
        />
        {activeComponent}
      </div>
    );
  }
}

export default App;
