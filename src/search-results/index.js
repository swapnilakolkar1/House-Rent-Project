import React from "react";
import SearchResultRow from "./search-result-row";
const SearchResults = props => {
  const houseRows = props.filteredHouses.map(h => (
    <SearchResultRow
      key={h.id.toString()}
      house={h}
      setActiveHouse={props.setActiveHouse}
    />
  ));
  return (
    <div className="mt-2">
      <h4>Result for {props.city}:</h4>
      <table className="table tble-hover">
        <tbody>{houseRows}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;
