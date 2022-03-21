import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({
  data: { brand, id, imgUrl, model, price }
}) => {
  const product = [brand, model, `${price || 'Na'} €`];

  return (
    <>
      <Link className='link' to={`detalle?id=${id}`}>
        <li className='item'>
          <img className='img' src={ imgUrl }></img>
          <ul className='list-item'>
            { 
              product.map((prod, i) => {
                return <li key={`item${i}_`}><span>{prod}</span></li>
              }) 
            }
          </ul>
        </li>
      </Link>
    </>
  );
}

Item.propTypes = {
    data: PropTypes.shape({
      brand: PropTypes.string,
      id: PropTypes.string,
      model: PropTypes.string,
      price: PropTypes.string,
      imgUrl: PropTypes.string
    })
}

export default Item;
