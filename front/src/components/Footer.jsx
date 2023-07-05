import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTelephoneForward,
  BsFillArrowUpCircleFill,
  BsEnvelopeAt,
  BsWhatsapp,
} from "react-icons/Bs";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import "../css/Footer.css";

BsWhatsapp;

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contenedor-footer2">
        <div className="direccion">
          <h5 className="contacto">Contacto:</h5>
          <h6>
            <BsTelephoneForward /> 12345678
          </h6>
          <h6>
            <BsEnvelopeAt /> hola@gmail.com
          </h6>
          <h6>
            <SiGooglemaps /> San martin 250
          </h6>
        </div>
        <div className="Redes">
          <div className="social-icons">
            <Link to="https://www.facebook.com">
              <BsFacebook size={20} className="icono-1" />
            </Link>
            <Link to="https://instagram.com">
              <BsInstagram size={20} className="icono-2"/>
            </Link>
            <Link to="https:github.com">
              <BsWhatsapp size={20} className="icono-3"/>
            </Link>
          </div>
          <div className="copyright">
          <AiOutlineCopyrightCircle className="iconCopy" />
          <p>Todos los derechos reservados.</p>
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default Footer;
