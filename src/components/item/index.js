import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ data: { brand, id, imgUrl, model, price } }) => {
  return (
    <Link className="link" to={`detalle?id=${id}`}>
      <div className="item_wrapper">
        <img className="item_img" src={imgUrl}></img>
        <h3 className="item_brand">{`${brand} ${model}`}</h3>
        <div className="item_price">
          <h4>{`${price || "Na"} €`}</h4>
        </div>
      </div>
    </Link>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    brand: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string,
  }),
};

export default Item;
