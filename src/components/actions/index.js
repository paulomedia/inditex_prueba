import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addToCart } from '../../services';
import Button from '../button';
import Selector from '../selector';
import './actions.css';

const Actions = ({
  data: { id, options }
}) => {
  const [color, setColor] = useState(''); 
  const [storage, setStorage] = useState(''); 

  const handleChange = ({ target: { name, value } }) => {

    console.log('HandleChange add to cart')
    switch (name) {
      case 'color':
        setColor(value);
        break;

      case 'storage':
        setStorage(value);
        break;
    }
  }

  const handleClick = () => {
    console.log('HandleClick add to cart')
    addToCart({ 
      id, colorCode: color, storageCode: storage
    }).then(response => {
      console.log('addToCart response  ---> ', response);
      // TODO actualizar el numero de elementos en el cart con response.count
      // La peticón devuelve siempre un 400 deberiamos recebir { count: x }
    }, error => {
      console.log('addToCart error  ---> ', error);
    });
  }

  return (
    <>
      <h3>Acciones</h3>
      <Selector 
        description={ 'Selecione el almacenaimento:' }
        handleChange={ handleChange }
        name={ 'storage' }
        options= { options && options.storages }
      />
      <Selector 
        description={ 'Selecione el color:' }
        handleChange={ handleChange }
        name={ 'color' }
        options= { options && options.colors }
      />
      <Button
        handleClick={ handleClick }
      />
    </>
  );
}

Actions.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.any
  ])
}

Actions.defaultProps = {
  data: undefined
}
  
export default Actions;
