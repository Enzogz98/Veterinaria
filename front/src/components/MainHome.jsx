import axios from "axios";
import React, { useEffect, useState } from "react";
import { TfiRuler } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
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

  

  // console.log(storeData);
  // console.log(datoPerfil);


  const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("login");
    navigate("/");
  };

  const tareaController = (e) => {
    e.preventDefault();
    if (editar !== true) {
      //post

      setTabla(1);
      console.log("se hizo un post");
    }else {
      setTabla(2);
      console.log("se hizo un put");
    }
  };
  const onEditar = (elemento) => {
    //encender/activar editar
    
      console.log(elemento)
      setEditar(true)
      setIdtarea(elemento.id)
      setTarea(elemento.tarea)
      setDescripcion(elemento.descripcion)
      setFecha(elemento.fecha_inicio)
      setPrioridad(elemento.prioridad)
  };
  const offEditar=()=>{
    setEditar(false)
    setTarea("")
    setDescripcion("")
    setFecha("")
    setPrioridad("3")
  }

  const elimiarTarea = (elemento) => {
    //delete
    setIdtarea(elemento.id);
    console.log(idTarea)
    setTabla(3);
    console.log("tarea eliminada");
  };

  return (
    <>
      {storeData.map((user) =>
        
        <ul key={user.id}>
          <li>Estado {user.estado } </li>
          <li>Rol {user.id_rol}</li>
          <li>Nick:{user.nick}</li>
          <li>Pass:{user.pass}</li>
          { <li>
            imagen perfil:{" "}
            {(datoPerfil)? (
              <img src={datoPerfil[0].img} alt="" />
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
