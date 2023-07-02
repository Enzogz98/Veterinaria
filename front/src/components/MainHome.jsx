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
  const [editar,setEditar]=useState(false);
  const [tabla,setTabla]=useState(0)
  const [monitorTabla,setMonitorTabla]= useState(0);
  const [recargar,setRecargar]=useState(0)

  const [tarea,setTarea]=useState("");
  const [descripcion,setDescripcion]=useState("");
  const [fecha,setFecha]=useState("");
  const [prioridad,setPrioridad]=useState(0);



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

    const cargarTabla= async () =>{
      try {
        const response= await axios.post("http://localhost:3000/cargarTareas",{id_u});
        if (response.status === 200){
          setMonitorTabla(response.data)
          
        }else {
          console.log('error al desplegar los datos estado no 200')
        }
      } catch (error) {
        console.error("Error al realizar la consulta con el servidor",error)
      }
    }
  if(id_u!==0){
    perfil()
    cargarTabla()
  }
  }, [id_u,recargar])

useEffect(()=>{
  console.log(monitorTabla)
},[monitorTabla])

  useEffect(()=>{
    const postTabla = async () =>{
      try {
        const response = await axios.post("http://localhost:3000/nuevaTarea",{id_u,tarea,descripcion,fecha,prioridad});
        if (response.status === 200){

          alert("se cargo con exito la nueva tarea")
          setRecargar(recargar+1)
          setTabla(0)
          console.log(tabla)


        } else {
          alert("hubo un error al cargar los datos")
        }
        
      } catch (error) {
        console.error("Error al realizar la consulta con el servidor ",error);
      }
    };
    if(tabla===1){
      postTabla()
    }
    if(tabla===2){
      //putTabla()
      
    }
  },[tabla])

  // console.log(storeData);
  // console.log(datoPerfil);

 
  const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("login");
    navigate("/");
  };

  const tareaController = (e) =>{
        e.preventDefault();
        if(editar!==true){
              //post
              setTabla(1)
              console.log('se hizo un post')
              
        }else{
          //put
          console.log('se hizo un put')
        }

  };

  const elimiarTarea=()=>{
    //delete 
  }

  return (
    <>
      {storeData.map((user) =>
        
        <ul key={user.id}>
          <li>Id: {user.id}</li>
          <li>Estado {user.estado } </li>
          <li>Rol {user.id_rol}</li>
          <li>Nick:{user.nick}</li>
          <li>Email:{user.email}</li>
          <li>Pass:{user.pass}</li>
          <li>Apellido y Nombre: {user.apellido},{user.nombre}</li>
          { <li>
            imagen perfil:{" "}
            {(datoPerfil)? (
             <div>
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
               <br />
               <hr />
               <div>

                <div>
                    <h4>{editar==true?"Editar tarea":"Nueva Tarea"}</h4>
                    <form onSubmit={tareaController}>
                      <label htmlFor="">Tarea:</label>
                      <input type="text" onChange={(e)=>(setTarea(e.target.value))} />
                      <br />
                      <label htmlFor="">Descripcion:</label>
                      <input type="text" onChange={(e)=>(setDescripcion(e.target.value))} />
                      <br />
                      <label htmlFor="">Fecha:</label>
                      <input type="datetime-local" onChange={(e)=>(setFecha(e.target.value))} />
                      <br />
                      <label htmlFor="">Prioridad - +:</label>
                      <input type="radio" name="opcion" value="3" id="opcion3" onChange={(e)=>(setPrioridad(e.target.value))} />
                      <input type="radio" name="opcion" value="2" id="opcion2" onChange={(e)=>(setPrioridad(e.target.value))}/>
                      <input type="radio" name="opcion" value="1" id="opcion1" onChange={(e)=>(setPrioridad(e.target.value))}/>
                      <br />
                      
                      <button type="submit">Agregar Tarea</button>
                    </form>
                </div>

                 <div>
                 <table>
                    <thead>
                        <tr>
                        <th>Tarea</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                        <th>Fecha Finalizado</th>
                        <th>Prioridad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                          <td>5</td>
                        </tr>
                        
                        
                    </tbody>
                  </table>
                 </div>
               </div>
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
