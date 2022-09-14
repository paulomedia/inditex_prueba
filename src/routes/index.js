import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../page/detail";
import Main from "../page/main";

const Enrutamento = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detalle" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Enrutamento;
