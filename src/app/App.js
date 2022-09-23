import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "../context/context";
import Detail from "../page/detail";
import Main from "../page/main";
import Header from "../page/header";
import Footer from "../page/footer";

const App = () => {
  const [countProducts, setProducts] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ countProducts, setProducts }}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="detalle" element={<Detail />} />
          </Routes>
        </CartContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
