import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumbs';
import './header.css';

const Header = () => {

  return (
    <header className='header'>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <Breadcrumb />
      </div>
      <div>
        <span>0 items</span>
      </div>
    </header>
  );
}
  
export default Header;
