import React from "react";
import PropTypes from "prop-types";
import { FormLabel, MenuItem, Select } from "@mui/material";
import "./selectors.css";

const STORAGE = "Almacenamiento";
const COLOR = "Color";

const Selectors = ({ color, storage, handleChange, options }) => {
  return (
    <div className="selectors_container">
      <FormLabel>{STORAGE}</FormLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={
          storage || (options && options.storages && options.storages[0].code)
        }
        label="Storage"
        name="storage"
        onChange={handleChange}
      >
        {options &&
          options.storages &&
          options.storages.map(({ name, code }) => (
            <MenuItem value={code} key={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
      <FormLabel>{COLOR}</FormLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={color || (options && options.colors && options.colors[0].code)}
        label="Color"
        name="color"
        onChange={handleChange}
      >
        {options &&
          options.colors &&
          options.colors.map(({ name, code }) => (
            <MenuItem value={code} key={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

Selectors.propTypes = {
  color: PropTypes.number,
  storage: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([PropTypes.any]),
};

export default Selectors;
