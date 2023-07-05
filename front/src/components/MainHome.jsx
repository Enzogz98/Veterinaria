import axios from "axios";
import React, { useEffect, useState } from "react";
import { TfiRuler } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import img from "../assets/nota2.png";
import "../css/MainHome.css";

//modificar la contante main home para que reciba la props que le envio el componente padre, 
//crear una funcion que llame a esa funcion y envie por parametro los datos que recupera (dato perfil)
//

const MainHome = () => {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState([]);
  const [id_u, setId_u] = useState(0);
  const [datoPerfil, setPerfil] = useState();

  const [editar, setEditar] = useState(false);
  const [tabla, setTabla] = useState(0);
  const [monitorTabla, setMonitorTabla] = useState([]);
  const [recargar, setRecargar] = useState(0);
  const [idTarea, setIdtarea] = useState(0);
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [prioridad, setPrioridad] = useState("3");

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

    const cargarTabla = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/tareas/cargarTarea",
          { id_u }
        );
        if (response.status === 200) {
          setMonitorTabla(response.data);
        } else {
          console.log("error al desplegar los datos estado no 200");
        }
      } catch (error) {
        console.error("Error al realizar la consulta con el servidor", error);
      }
    };
    if (id_u !== 0) {
      perfil();
      cargarTabla();
    }
  }, [id_u, recargar]);

  useEffect(() => {
    console.log(monitorTabla);
  }, [monitorTabla]);

  useEffect(() => {
    const postTabla = async () => {
      try {
        const response = await axios.post("http://localhost:3000/tareas", {
          id_u,
          tarea,
          descripcion,
          fecha,
          prioridad,
        });
        if (response.status === 200) {
          alert("se cargo con exito la nueva tarea");
          setRecargar(recargar + 1);
          setTabla(0);
          console.log(tabla);
        } else {
          alert("hubo un error al cargar los datos");
        }
      } catch (error) {
        console.error("Error al realizar la consulta con el servidor ", error);
      }
    };

    const putTabla = async () => {
      try {
        //editar el put
        const response = await axios.put("http://localhost:3000/tareas", {
          idTarea,
          tarea,
          descripcion,
          fecha,
          prioridad,
        });
        if (response.status === 200) {
          alert("se Edito con exito la tarea");
          setRecargar(recargar + 1);
          setTabla(0);
          offEditar();
        } else {
          alert("hubo un error al guardar la edicion de los datos");
        }
      } catch (error) {
        console.error("Error al realizar la consulta con el servidor", error);
      }
    };

    const deleteTabla = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/tareas/delete",
          { idTarea }
        );

        if (response.status === 200) {
          alert("se Elimino con exito la tarea");
          console.log(idTarea);
          setRecargar(recargar + 1);
          setTabla(0);
          offEditar();
        } else {
          alert("hubo un error al Eliminar los datos");
        }
      } catch (error) {
        console.error("Error al realizar la consulta con el servidor", error);
      }
    };

    if (tabla === 1) {
      postTabla();
      console.log("se ejecuto un post");
    }
    if (tabla === 2) {
      putTabla();
      console.log("se ejecuto un put");
    }
    if (tabla === 3) {
      deleteTabla();
      console.log("se ejecuto un delete");
    }
  }, [tabla]);

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
    } else {
      setTabla(2);
      console.log("se hizo un put");
    }
  };
  const onEditar = (elemento) => {
    //encender/activar editar

    console.log(elemento);
    setEditar(true);
    setIdtarea(elemento.id);
    setTarea(elemento.tarea);
    setDescripcion(elemento.descripcion);
    setFecha(elemento.fecha_inicio);
    setPrioridad(elemento.prioridad);
  };
  const offEditar = () => {
    setEditar(false);
    setTarea("");
    setDescripcion("");
    setFecha("");
    setPrioridad("3");
  };

  const elimiarTarea = (elemento) => {
    //delete
    setIdtarea(elemento.id);
    console.log(idTarea);
    setTabla(3);
    console.log("tarea eliminada");
  };

  return (
    <>
      <div className="contenedor-mainhome1">
        {storeData.map((user) => (
          <div key={user.id}>
            {/* <li>Id: {user.id}</li>
          <li>Estado {user.estado} </li>
          <li>Rol {user.id_rol}</li>
          <li>Nick:{user.nick}</li>
          <li>Email:{user.email}</li>
          <li>Pass:{user.pass}</li> */}
            <div className="contenedor-bienvenida">
              <div>
                <h1>Bienvenido</h1>
                <h2>
                  {user.apellido}
                  {user.nombre}
                </h2>
              </div>

              {datoPerfil ? (
                <div className="contenedor-textarea">
                  <div className="nota">
                    <img src={img} alt="" />
                  </div>

                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    defaultValue={datoPerfil[0].notas}
                    className="textarea-bienvenida"
                  ></textarea>
                </div>
              ) : (
                <div></div>
              )}


            </div>

            {
              <div>
                {" "}
                {datoPerfil ? (
                  <div>
                    <div>

                    
                      {/* <img className="imgPerfil" src={datoPerfil[0].img} alt="" />
                       */}
                      {/* <br />
                    <ul>
                      <li>Estilo Background: {datoPerfil[0].background}</li>
                      <li>Estilo color: {datoPerfil[0].colorHeader}</li>
                      <li>ligthDark: {datoPerfil[0].ligthDark}</li>
                    </ul> */}
                    </div>

                    <div className="contenedor-tareas">

                      <div className="contenedor-agregarTarea">
                        <h4>
                          {editar == true ? "Editar tarea" : "Nueva Tarea"}
                        </h4>
                        <form onSubmit={tareaController}>

                          <label htmlFor="">Tarea: </label>
                          <input
                            type="text"
                            value={tarea}
                            onChange={(e) => setTarea(e.target.value)}
                          />

                          <label htmlFor="">Descripcion: </label>
                          <input
                            type="text"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                          />

                          <label htmlFor="">Fecha: </label>
                          <input
                            type="datetime-local"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                          />

                          <label htmlFor="" className="prioridad">Prioridad -
                          
                          <input
                            className="radio"
                            type="radio"
                            name="opcion"
                            value="3"
                            checked={prioridad == "3"}
                            id="opcion3"
                            onChange={(e) => setPrioridad(e.target.value)}
                          />

                           <input
                            className="radio"
                            type="radio"
                            name="opcion"
                            value="2"
                            id="opcion2"
                            checked={prioridad == "2"}
                            onChange={(e) => setPrioridad(e.target.value)}
                          />

                          <input
                            className="radio"
                            type="radio"
                            name="opcion"
                            value="1"
                            checked={prioridad == "1"}
                            id="opcion1"
                            onChange={(e) => setPrioridad(e.target.value)}
                          />

                          + </label>
                         

                          {editar == false ? (
                            <button type="submit">Agregar Tarea</button>
                          ) : (
                            <div>
                              <button type="submit">Aplicar Cambios</button>
                              <button onClick={offEditar}>Cancelar</button>
                            </div>
                          )}
                        </form>
                      </div>

                      <div className="contenedor-tabla">
                        <table>
                          <thead>
                            <tr>
                              <th>Tarea</th>
                              <th>Descripcion</th>
                              <th>Fecha</th>
                              <th>Fecha Finalizado</th>
                              <th>Prioridad</th>
                              <th>Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monitorTabla.map((elemento) => (
                              <tr key={elemento.id}>
                                <td>{elemento.tarea}</td>
                                <td>{elemento.descripcion}</td>
                                <td>{elemento.fecha_inicio}</td>
                                <td>{elemento.fecha_finalizacion}</td>
                                <td>{elemento.prioridad}</td>
                                <td>
                                  <button  className="btn-editar" onClick={() => onEditar(elemento)}>
                                    Editar
                                  </button>
                                  <button
                                    className="btn-eliminar" onClick={() => elimiarTarea(elemento)}
                                  >
                                    Eliminar
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span>No hay imagen de perfil disponible</span>
                )}
              </div>
            }
          </div>
        ))}

        <button onClick={logOut}> Cerrar sesion</button>
      </div>
    </>
  );
};

export default MainHome;
