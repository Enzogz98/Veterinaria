import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MainLogin = () => {
  const [nickEmail, setNickEmail] = useState("");
  const [pass, setPass] = useState("");

  const [iniciar, setIniciar] = useState(0);
  const [data, setData] = useState([]);

  const login = () => {
    axios
      .post("http://localhost:3000/login", {
        nickEmail: nickEmail,
        pass: pass,
      })
      .then((res) => setData(res.data))
      .then(console.log(data))
      .catch((err) => console.log(err));
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
