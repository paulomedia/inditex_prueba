import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "./search.css";

const SEARCH_PRODUCT = "Buscar producto";

const Search = ({ handleSearch }) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      handleSearch(value);
    },
    [handleSearch]
  );

  return (
    <TextField
      className="search_input"
      id="outlined-basic"
      onChange={handleChange}
      label={SEARCH_PRODUCT}
      variant="outlined"
    />
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
