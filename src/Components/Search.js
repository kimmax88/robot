import React from "react";

const Search = ({ searchChange }) => {
  return (
    <div>
      <input
        className="serchBox"
        type="search"
        placeholder="serch robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
