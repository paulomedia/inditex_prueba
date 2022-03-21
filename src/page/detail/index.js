import React, { useEffect, useState } from 'react';
import Actions from '../../components/actions';
import Description from '../../components/description';
import Image from '../../components/image';
import { useSearchParams } from "react-router-dom";
import { getProduct } from '../../services';
import './detail.css';

const Detail = () => {
  const [searchParams] = useSearchParams('');
  const [product, setProduct] = useState({});
  const { imgUrl } = product

  useEffect(() => {
    const id = searchParams.get('id');

    getProduct(id).then(response => {
      setProduct(response);
    }, () => { 
      console.log('No ha sido posible cargar la información del producto -->');
    })
  }, []);

  return (
    <main className='detail'>
      <article className='article'>
        <div className='image'>
          <Image imgUrl={ imgUrl } />
        </div>
        <div className='caracteristicas'>
          <div>
            { product && <Description data={ product } />}
          </div>
          <div className='actions'>
            { product && <Actions data={ product } /> }
          </div>
        </div>
      </article>
    </main>
  );
}
  
export default Detail;
