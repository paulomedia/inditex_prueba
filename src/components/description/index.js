import React from "react";
import PropTypes from "prop-types";
import { getString } from "../../helpers";
import "./description.css";

const Description = ({
  data: {
    id,
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  },
}) => {
  const list = [
    brand,
    model,
    `${price || "Na"} €`,
    getString(cpu),
    ram,
    getString(os),
    displayResolution,
    battery,
    getString(primaryCamera),
    getString(secondaryCmera),
    dimentions,
    weight,
  ];

  return (
    <>
      <h3 className="titulo_description">Caracteristicas</h3>
      <ul className="lista_description">
        {list.map((item, i) => (
          <li className="item_description" key={`ìtem${i}_${id}`}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

Description.propTypes = {
  data: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    ram: PropTypes.string,
    os: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    secondaryCmera: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    dimentions: PropTypes.string,
    weight: PropTypes.string,
  }),
};

Description.defaultProps = {
  data: undefined,
};

export default Description;
