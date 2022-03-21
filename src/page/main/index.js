import React, { useContext, useEffect, useState } from 'react';
import Item from '../../components/item';
import Search from '../../components/search';
import { getAll } from '../../services';
import { ProductContext } from '../../context/context';
import './main.css';

function Main() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const {products, setProducts} = useContext(ProductContext);

  useEffect(() => {
     getAll()
      .then(data => {
        setItems(data);
        setProducts(data);
      }, () => setMessage('No ha sido posible presentar los datos, intente otra vez'))
  }, []);

  const handleSearch = search => {
    let exp = new RegExp(search, 'i');
    let aux = [];

    for (let i = 0; i<products.length; ++i) {
      if (exp.test(products[i].brand) || exp.test(products[i].model)) {
        aux.push(products[i]);
      }
    }
    setItems(aux);
  }

  return (
    <main className='main'>
      <div className='main_header'>
        <span>Productos</span>
        <Search 
          handleSearch={ handleSearch }
        />
      </div>
      <article className='article'>
        <p>{ message }</p>
        <ul className='list'>
           { items ? items.map(product => (
             <Item 
               data={ product }
               key={`product_${product.id}`}
             />
           )) : <p>Cargando resultados...</p>
           }
        </ul>
      </article>
    </main>
  );
}
  
export default Main;
