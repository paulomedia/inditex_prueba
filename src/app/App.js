import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from '../page/detail';
import Main from '../page/main';
import Header from '../page/header';
import Footer from '../page/footer';
import { ProductContext } from '../context/context';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ProductContext.Provider value={{ products, setProducts }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detalle" element={<Detail />} />
        </Routes>
        </ProductContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
