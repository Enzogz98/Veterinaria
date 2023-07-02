import axios from "axios";
import React, { useEffect, useState } from "react";
import { TfiRuler } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "../css/MainHome.css"

const MainHome = () => {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState([]);
  const [id_u, setId_u] = useState(0);
  const [datoPerfil,setPerfil]=useState();
  
  useEffect(()=> {
    const fetchData = async () => {
    if(localStorage.getItem("login")){
      if(localStorage.getItem("userData")){
        const userData= JSON.parse(localStorage.getItem("userData"))
        setStoreData(userData);
        if(userData.length>0){
         
          setId_u(userData[0].id)
        }
        
        
        // storeData.map(dato=>(console.log(dato.id)))
        //console.log(id_u)
      }else{
        setStoreData([])
      }
    } else{
      logOut();
    }
  }

  
  fetchData();
        
  }, []);
 
  useEffect(()=>
  {
    const perfil = async () => {
    try {
      const response = await axios.post("http://localhost:3000/perfil",{id_u});
      if (response.status === 200) {
        setPerfil(response.data);
        
      } else {
        console.error("Error en la respuesta");
      }
    } catch (error) {
      console.error("Error al realizar la peticion: ", error);
    }
  };
  if(id_u!==0){
    perfil()
  }
  }, [id_u])

  

  console.log(storeData);
  console.log(datoPerfil);

 
  const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      {storeData.map((user) =>
        
        <ul key={user.id}>
          <li>Id: {user.id}</li>
          <li>Estado {user.estado } </li>
          <li>Nick:{user.nick}</li>
          <li>Email:{user.email}</li>
          <li>Pass:{user.pass}</li>
          <li>Apellido y Nombre: {user.apellido},{user.nombre}</li>
          { <li>
            imagen perfil:{" "}
            {(datoPerfil)? (
             <div>
               <img className="imgPerfil" src={datoPerfil[0].img} alt="" />
               <textarea name="" id="" cols="30" rows="10" defaultValue={datoPerfil[0].notas}></textarea>
               <br />
               <ul>
                <li>Estilo Background: {datoPerfil[0].background}</li>
                <li>Estilo color: {datoPerfil[0].colorHeader}</li>
                <li>ligthDark: {datoPerfil[0].ligthDark}</li>
                
               </ul>
             </div>
            
              
            ) : (
              <span>No hay imagen de perfil disponible</span>
            )}
          </li>}
        </ul>
        
      
    ) }
       

      <button onClick={logOut}> Cerrar sesion</button>
    </>
  );
};

export default MainHome;
