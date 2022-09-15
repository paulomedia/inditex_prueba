import React from "react";
import { Link } from "react-router-dom";
import DefaultBreadcrumbs from "../../components/defaultbreadcrumbs";
import Cart from "../../components/cart";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <DefaultBreadcrumbs />
      <div>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
