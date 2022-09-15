import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";

const Search = ({ handleSearch }) => {
  const [inputs, setInputs] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputs(value);
    handleSearch(value);
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        name="search"
        value={inputs || ""}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
