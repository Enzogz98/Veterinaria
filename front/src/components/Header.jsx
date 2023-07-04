import huella from "./../assets/huellita.png";
import titulo from "./../assets/patitas.png";
import perfil from "./../assets/perfil.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Header.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react";



const Header = () => {
    const navigate = useNavigate();
    const Menus =["Profile","YourApp", "settings","logout"]
    const[open,setOpen] = useState(false);
    const menuRef = useRef();
    const imgRef = useRef();

    


  return (
   <>
   <div className="contenedor-navars">
   <Navbar>
      <Container>

        <div className="contenedor-brand">

        <Navbar.Brand onClick={()=>(alert("redirigir a home"), navigate("/home"))} >
        
            <img src={huella} alt="logo" className="header-image1" /> 
            
            
            <img src={titulo} alt="titulo" className="header-image2" />
            

        </Navbar.Brand>

        </div>
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto">

            <div className="nav-contenedor">

            <Nav.Link href="#home" className="nav-link">

              <p>Turnos</p>

            </Nav.Link>

            <Nav.Link href="#features" className="nav-link">

              <p>Turnos Generales</p>

            </Nav.Link>

            <Nav.Link href="#pricing" className="nav-link">

              <p>Ventas</p>

            </Nav.Link>

            </div>
            
            <div className="contenedor-dropdown">
                <div className="contenedor-img-dropdown">
                <img src={perfil} alt="perfil" className="header-image3" onClick={()=>setOpen(!open)} ref={imgRef}/>
                
                </div>

                {
                    open && <div className="dropdown" ref={menuRef}>

                    {
                     Menus.map((menu)=>
                     <p className="li-dropdown" onClick={()=>setOpen(false)}> {menu} </p>
                     )

                    }
                    </div>

                }

            </div>

             

             

          </Nav>
    

        </Navbar.Collapse>

      </Container>

    </Navbar>


   </div>
   


</> 
  );
};

export default Header;
