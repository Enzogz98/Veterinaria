import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsTelephoneForward, BsFillArrowUpCircleFill, BsEnvelopeAt } from 'react-icons/Bs';
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import "../css/Footer.css"






const Footer = () => {

  return (

    <div className="footer-container">

      <div className="direccion">

        <h3 className="contacto">Contacto:</h3>
        <h3><BsTelephoneForward /> 12345678</h3>
        <h3>< BsEnvelopeAt /> hola@gmail.com</h3>
        <h3> <SiGooglemaps /> San martin 250</h3>

        <div className="Redes">

          <h3>Redes sociales</h3>

          <div className="social-icons">
            <Link to="https://www.facebook.com"><BsFacebook size={32} /></Link>
            <Link to="https://instagram.com"><BsInstagram size={32} /></Link>
            <Link to="https:github.com"><BsGithub size={32} /></Link>
          </div>

        </div>

        <div className='copyright'>

        <AiOutlineCopyrightCircle className='icon'/> <p>Todos los derechos reservados.</p>

        </div>
        
       
      </div>
    </div>
  );
};


export default Footer;