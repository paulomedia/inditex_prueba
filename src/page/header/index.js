import React from "react";
import { Link } from "react-router-dom";
import InditexBreadcrumbs from "../../components/inditexbreadcrumbs";
import Cart from "../../components/cart";
import HomeIcon from "@mui/icons-material/Home";
import "./header.css";

const Header = () => {
  return (
    <header className="header_wrapper">
      <nav>
        <Link to="/">
          <HomeIcon />
        </Link>
      </nav>
      <InditexBreadcrumbs />
      <div>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
