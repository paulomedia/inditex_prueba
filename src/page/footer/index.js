import React from 'react';
import './footer.css';

const Footer = () => {
  const enlaces = ['Condiciones de uso', 'Politica de privacidad', 'Politica de Cookies'];

  return (
    <footer className='footer'>
      <div className='container'>
        <p>
          <span className='text'>© 2022 Prueba Técnica</span>  
        </p>
        <ul className='enlaces'>
          {
            enlaces.map(enlace => {
              return <li key={`enlace_${enlace}`}><a href='#'>{ enlace }</a></li>
            })
          } 
        </ul>  
      </div>  
    </footer>
  );
}
  
export default Footer;
