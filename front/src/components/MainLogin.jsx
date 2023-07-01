import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/MainLogin.css";

import { TfiEmail, TfiLock } from "react-icons/tfi";

const MainLogin = () => {
  const [nickEmail, setNickEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState();

  // useEffect(()=>{
  //   if(data){
  //     data.length>0 ? navigate("/home") : alert("Usuario o contraseña incorrectos")
  //   }
  // }
  // , [data])

  useEffect(() => {
    if (data) {
      if (data.length > 0) {
        localStorage.setItem("userData", JSON.stringify(data));
        data.map((dato) => {
          if (dato.estado == 1) {
            localStorage.setItem("login", true);
          }
        });

        navigate("/home");
      } else {
        alert("usuario incorrecto");
      }
    }
  }, [data]);

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        nickEmail,
        pass,
      });
      if (response.status === 200) {
        setData(response.data);
      } else {
        console.error("Error en la respuesta");
      }
    } catch (error) {
      console.error("Error al realizar la peticion: ", error);
    }
  };

  // const login = () => {

  //   axios
  //     .post("http://localhost:3000/login", {
  //       nickEmail: nickEmail,
  //       pass:pass
  //     })
  //     .then((res) =>{
  //      const datos= res.data
  //       if ((datos.nick === nickEmail || datos.email=== nickEmail) && datos.pass=== pass){
  //         navigate("/home")
  //       } else{
  //         alert("usuario incorrecto")
  //       }
  //     })
  //     .catch((err)=> console.log(err));
  //   };

  return (
    <>
      <div className="body-login">



          <div className="contenedor-login">
            <h2>LOGIN</h2>

            <div className="contenedor-label">
              <TfiEmail className="icono" />
              <input
                onChange={(e) => setNickEmail(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">Nick/Email:</label>
            </div>

            <div className="contenedor-label">
              <TfiLock className="icono" />
              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                required
              />
              <label htmlFor="">Password:</label>
            </div>

            <button onClick={login}>Ingresar</button>
          </div>


      </div>
    </>
  );
};

export default MainLogin;
