import React from "react";
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ handleClick }) => {
  return (
    <button className='button' onClick={ handleClick } >Añadir a la ciesta</button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.oneOfType([
    PropTypes.any
  ])
}

export default Button;