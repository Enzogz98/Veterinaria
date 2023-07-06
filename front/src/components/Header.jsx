import huella from "./../assets/huellita.png";
import titulo from "./../assets/patitas.png";
import perfil from "./../assets/perfil.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../css/Header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const logOut = () => {
  // localStorage.removeItem("userData");
  // localStorage.removeItem("login");
  navigate("/");
};

const Header = () => {
  const navigate = useNavigate();
  const Menus = ["Profile", "YourApp", "settings"];
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  return (
    <>
      <div className="contenedor-navars">
        <Navbar expand="lg">
          <Container>
            <div className="contenedor-brand">
              <Navbar.Brand
                onClick={() => (alert("redirigir a home"), navigate("/home"))}
              >
                <img src={huella} alt="logo" className="header-image1" />
                <img src={titulo} alt="titulo" className="header-image2" />
              </Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <div className="nav-contenedor">

                  <Nav.Link >
                    <Link to='/usuarios' className="nav-link"> <p>Usuarios</p></Link>
                   
                  </Nav.Link>
                  <Nav.Link >
                    <Link to='/pacientes' className="nav-link"> <p>Pacientes</p></Link>
                   
                  </Nav.Link>
                  <Nav.Link  >
                    <Link to='/turnos' className="nav-link"><p>Turnos</p>
                    </Link>
                    
                  </Nav.Link>
                  <Nav.Link  >
                    <Link to='/Venta' className="nav-link"><p>Ventas</p>
                    </Link>
                    
                  </Nav.Link>
                  <Nav.Link  >
                    <Link to='/Veterinarios' className="nav-link"><p>Veterinarios</p>
                    </Link>
                    
                  </Nav.Link>
                    
                </div>

                <div className="contenedor-dropdown">
                  <div className="contenedor-img-dropdown">
                    <img
                      src={perfil}
                      alt="perfil"
                      className="header-image3"
                      onClick={() => setOpen(!open)}
                      ref={imgRef}
                    />
                  </div>

                  {open && (
                    <div className="dropdown" ref={menuRef}>
                      {Menus.map((menu) => (
                        <p className="li-dropdown" onClick={() => setOpen(false)}>
                          {menu}
                        </p>
                      ))}
                      <button onClick={logOut}>logout</button>
                    </div>
                  )}
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
