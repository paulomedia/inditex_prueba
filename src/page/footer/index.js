import React from "react";
import "./footer.css";

const PRUEBA_TECNICA = "© 2022 Prueba Técnica";
const enlaces = [
  "Condiciones de uso",
  "Politica de privacidad",
  "Politica de Cookies",
];

const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="footer_container">
        <span className="footer_text">{PRUEBA_TECNICA}</span>
        <ul className="footer_enlaces">
          {enlaces.map((enlace) => (
            <li key={`enlace_${enlace}`}>
              <a href="#">{enlace}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
