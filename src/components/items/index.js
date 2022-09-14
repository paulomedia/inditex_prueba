import React from 'react' 
import Item from '../item'
import './items.css'

const Items = ({ data }) => {
  return (
    <ul className='list'>
      { 
        data.map(product => <Item data={ product } key={ `product_${product.id}` }/>)
      }
    </ul>
  )
}

export default Items