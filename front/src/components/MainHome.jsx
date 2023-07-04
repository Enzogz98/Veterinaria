import axios from "axios";
import React, { useEffect, useState } from "react";
import { TfiRuler } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "../css/MainHome.css";
import bienvenida from "../assets/img-bienvenida2.jpg";

const MainHome = () => {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState([]);
  const [id_u, setId_u] = useState(0);
  const [datoPerfil, setPerfil] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("login")) {
        if (localStorage.getItem("userData")) {
          const userData = JSON.parse(localStorage.getItem("userData"));
          setStoreData(userData);
          if (userData.length > 0) {
            setId_u(userData[0].id);
          }

          // storeData.map(dato=>(console.log(dato.id)))
          //console.log(id_u)
        } else {
          setStoreData([]);
        }
      } else {
        logOut();
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const perfil = async () => {
      try {
        const response = await axios.post("http://localhost:3000/perfil", {
          id_u,
        });
        if (response.status === 200) {
          setPerfil(response.data);
        } else {
          console.error("Error en la respuesta");
        }
      } catch (error) {
        console.error("Error al realizar la peticion: ", error);
      }
    };
    if (id_u !== 0) {
      perfil();
    }
  }, [id_u]);

  // console.log(storeData);
  // console.log(datoPerfil);

  const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <div className="body-mainhome">

        <div className="contenedor-header">

        {storeData.map((user) => (
          <div key={user.id}>
            <div>
            <p>Estado {user.estado} </p>
            </div>
            <div>
            <p>Rol {user.id_rol}</p>
            </div>
            <div>
            <p>Nick:{user.nick}</p>
            </div>
            <div>
            <p>Pass:{user.pass}</p>
            </div>
            {
              <p>
                imagen perfil:{" "}
                {datoPerfil ? (
                  <img src={datoPerfil[0].img} alt="" className="imagen-perfil" />
                ) : (
                  <span>No hay imagen de perfil disponible</span>
                )}
              </p>
            }
          </div>
        ))}
          <button onClick={logOut}> Cerrar sesion</button>

        </div>
       
       <div className="contendor-bienvenida">
        <div className="bienvenida">

        </div>
         {storeData.map((user) => (
           <h1>BIENVENIDO {user.nick} </h1>

        ))}
        <div className="contenedor-imagen">
<img src={bienvenida} alt="cachorrito" className="imagen-bienvenida" />

        </div>

       </div>


      </div>
    </>
  );
};

export default MainHome;
