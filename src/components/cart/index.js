import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/context";
import "./cart.css";

const Cart = () => {
  const { countProducts } = useContext(CartContext);

  return (
    <div className="cart_wrapper">
      <span>{countProducts}</span>
      <ShoppingCartIcon />
    </div>
  );
};

export default Cart;
