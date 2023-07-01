import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainHome = () => {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    localStorage.getItem("login")
      ? localStorage.getItem("userData")
        ? setStoreData(JSON.parse(localStorage.getItem("userData")))
        : setStoreData([])
      : logOut()
  }, []);

  console.log(storeData);
  const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <ul>
        {storeData.map((user, index) => (
          <li key={index}>
            <p>Nick/Email: {user.nick}</p>
            <p>Password: {user.pass}</p>
          </li>
        ))}
      </ul>
      <button onClick={logOut}> Cerrar sesion</button>
    </>
  );
};

export default MainHome;
