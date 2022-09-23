import React, { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { addToCart } from "../../services";
import { Button } from "@mui/material";
import { CartContext } from "../../context/context";
import Selectors from "../../components/selectors";
import "./actions.css";

const ACTIONS = "Acciones";
const ADD_TO_CART = "Añadir al carrito";
const nameProps = {
  COLOR: "color",
  STORAGE: "storage",
};

const Actions = ({ data: { id, options } }) => {
  const [color, setColor] = useState();
  const [storage, setStorage] = useState();
  const { countProducts, setProducts } = useContext(CartContext);

  useEffect(() => {
    if (!color || !storage) {
      setColor(options.colors[0].code);
      setStorage(options.storages[0].code);
    }
  }, [options]);

  const handleChange = useCallback(({ target: { name, value } }) => {
    const nameChangeMapping = {
      [nameProps.COLOR]: setColor,
      [nameProps.STORAGE]: setStorage,
    };

    nameChangeMapping[name](value);
  }, []);

  const handleClick = useCallback(() => {
    addToCart({
      id,
      colorCode: color,
      storageCode: storage,
    }).then(
      () => {
        setProducts(countProducts + 1);
      },
      () => {}
    );
  }, [color, storage]);

  return (
    <>
      <h3>{ACTIONS}</h3>
      <Selectors
        color={color}
        storage={storage}
        handleChange={handleChange}
        options={options}
      />
      <Button variant="contained" onClick={handleClick} className="add_cart">
        {ADD_TO_CART}
      </Button>
    </>
  );
};

Actions.propTypes = {
  data: PropTypes.oneOfType([PropTypes.any]),
};

Actions.defaultProps = {
  data: undefined,
};

export default Actions;
