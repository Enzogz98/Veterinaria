import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainLogin = () => {
  const [nickEmail, setNickEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate =useNavigate();
  const [data,setData]= useState([]);
  
 
  
  useEffect(()=>{}
  , [])


  const login = () => {
   
    axios
      .post("http://localhost:3000/login", {
        nickEmail: nickEmail,
        pass:pass
      })
      .then((res) =>{
       const datos= res.data
        if ((datos.nick === nickEmail || datos.email=== nickEmail) && datos.pass=== pass){
          navigate("/home")
        } else{
          alert("usuario incorrecto")
        }
      })
      .catch((err)=> console.log(err));
    };
    

  return (
    <>
      <label htmlFor="">Nick/Email:</label>
      <input onChange={(e) => setNickEmail(e.target.value)} type="text" />
      <br />
      <label htmlFor="">Password:</label>
      <input onChange={(e) => setPass(e.target.value)} type="password" />
      <br />
      <button onClick={login}>Ingresar</button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default MainLogin;
