import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const MainPacientes = () => {
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [direccion,setDireccion]=useState("");
    const [dni,setDni]=useState("");
    const [tel,setTel]=useState("");
    const [cuit,setCuit]=useState("");
    const [especie,setEspecie]=useState("");
    const [raza,setRaza]=useState("");
    const [estado,setEstado]=useState(true);
    const [edad,setEdad]=useState("");
    const [datos,setDatos]=useState([]);
    const [switchAgregar,setSwitchAgregar]=useState(3)
    const [switchEditar,setSwitchEditar]=useState(false) 
    const [inputBuscar,setBuscar]=useState("")
    const [idPaciente,setIdPac]=useState(0)
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(switchAgregar===true){
          postClientes()
        }
        if (switchAgregar===false){
          postPacientes()
        }
    }
    useEffect(()=>{
      mostrarPacientes();
    },[])
    useEffect(()=>{
      console.log(datos)
    },[datos])
    const mostrarPacientes = ()=>{
        axios.get('http://localhost:3000/pacientes').then((response)=>{setDatos(response.data)})
    }
    
    const postClientes = async () => {
        try {
          const response = await axios.post("http://localhost:3000/clientes", {
            nombre,
            apellido,
            direccion,
            dni,
            tel,
            cuit
          });
          if (response.status === 200) {
            alert("se cargo con exito el nuevo cliente");
            
            
          } else {
            alert("hubo un error al cargar los datos");
          }
        } catch (error) {
          console.error("Error al realizar la consulta con el servidor ", error);
        }
      };
      const postPacientes = async () => {
        try {
          const response = await axios.post("http://localhost:3000/pacientes", {
            nombre,
            dni,
            especie,
            raza,
            edad,
            estado
          });
          if (response.status === 200) {
            alert("se cargo con exito el nuevo paciente");
            mostrarPacientes()
            
          } else {
            alert("hubo un error al cargar los datos");
          }
          
        } catch (error) {
          console.error("Error al realizar la consulta con el servidor ", error);
        }
      };

      const editarPaciente = (dato) =>{
            setNombre(dato.nomPac);
            setEspecie(dato.especie);
            setRaza(dato.raza);
            setEdad(dato.edad);
            setEstado(dato.estado);
            setDni(dato.dniCliente);
            setIdPac(dato.id);
            setSwitchEditar(true);
            
      }
      const cancelar=()=>{
            setNombre("");
            setEspecie("");
            setRaza("");
            setEdad("");
            setEstado("");
            setDni("");
            setSwitchEditar(false)
      }
      useEffect(()=>{
        getBusqueda()
      },[inputBuscar])
      const getBusqueda=()=>{
          const url='http://localhost:3000/pacientes/';
          const dato=inputBuscar;
          axios.get(url+dato).then((response)=>{setDatos(response.data)})
          
      }
      const transferirDatos=(paciente)=>{
        localStorage.setItem("idPaciente", paciente.id)
        localStorage.setItem("dniDueño", paciente.dniCliente)
        navigate('/turnos')
      }
      const putEditar= async()=>{
        try {
          const response = await axios.put("http://localhost:3000/pacientes",{
            nombre,
            dni,
            especie,
            raza,
            edad,
            estado,
            idPaciente
          })
          if(response.status === 200){
            alert("se realizo la modificacion con exito");
            mostrarPacientes();
            cancelar();
          } else {
            alert("hubo un error al cargar la modificacion  los datos");
          }
          
        } catch (error) {
          console.error("Error al realizar la consulta ",error)
        }
      }
      
  return (
    <>
        <div>
            <div>
                <input onChange={(e)=>(setBuscar(e.target.value))} type="text" placeholder='Buscar'/>
                
            </div>
            <br />
            <div>
                <button onClick={()=>{setSwitchAgregar(true)}}>Agregar Cliente</button>
                <button onClick={()=>{setSwitchAgregar(false)}}>Agregar Paciente</button>
                <br />
                 <div> {/* Agregar nuevo Cliente */}
                    <form onSubmit={handleSubmit}>
                    <h4>Agregar Cliente</h4>
                    <br />
                    <label htmlFor="">Nombre:</label>
                    <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
                    <br />
                    <label htmlFor="">Apellido:</label>
                    <input type="text" onChange={(e)=>setApellido(e.target.value)}/>
                    <br />
                    <label htmlFor="">Direccion:</label>
                    <input type="text" onChange={(e)=>setDireccion(e.target.value)}/>
                    <br />
                    <label htmlFor="">Dni:</label>
                    <input type="number" onChange={(e)=>setDni(e.target.value)}/>
                    <br />
                    <label htmlFor="">Telefono:</label>
                    <input type="text" onChange={(e)=>setTel(e.target.value)}/>
                    <br />
                    <label htmlFor="">Cuit:</label>
                    <input type="text" onChange={(e)=>setCuit(e.target.value)}/>
                    <br />
                    <button type='submit'>Agregar Cliente</button>
                    </form>
                </div>
                <div> {/* Agregar nuevo Paciente */}
                    <form onSubmit={handleSubmit}>
                    <h4>Agregar Paciente</h4>
                    <br />
                    <label htmlFor="">Nombre:</label>
                    <input value={nombre} type="text" onChange={(e)=>setNombre(e.target.value)}/>
                    <br />
                    <label  htmlFor="">Especie:</label>
                    <input value={especie} type="text" onChange={(e)=>setEspecie(e.target.value)}/>
                    <br />
                    <label htmlFor="">Raza:</label>
                    <input type="text" value={raza} onChange={(e)=>setRaza(e.target.value)}/>
                    <br />
                    <label htmlFor="">Edad:</label>
                    <input type="number" value={edad} onChange={(e)=>setEdad(e.target.value)}/>
                    <br />
                    <label htmlFor="">Estado:</label>
                    <input type="number" value={estado} onChange={(e)=>setEstado(e.target.value)}/>
                    <br />
                    <label htmlFor="">Dni Dueño:</label>
                    <input type="number" value={dni} onChange={(e)=>setDni(e.target.value)}/>
                    <br />
                    {switchEditar==false?(<button type='submit'>Agregar Paciente</button>):(
                      
                      <div>
                        <button onClick={putEditar} >Editar Paciente</button>
                        <button onClick={()=>cancelar()}>Cancelar</button>
                      </div>
                    )}
                    </form>
                </div>
            </div>
            <br /><hr />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Edad</th>
                            <th>Estado</th>
                            <th>Dueño</th>
                            <th>Dni Dueño</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          datos.length>0? (datos.map((dato)=>(
                            <tr key={dato.id}>
                              <td>
                                {dato.nomPac}
                              </td>
                              <td>
                                {dato.especie}
                              </td>
                              <td>
                                {dato.raza}
                              </td>
                              <td>
                                {dato.edad}
                              </td>
                              <td>
                                {dato.estado?"vivo":"un angel mas"}
                              </td>
                              <td>
                                {dato.cliente}
                              </td>
                              <td>
                                {dato.dniCliente}
                              </td>
                              <td>
                                <button onClick={()=>transferirDatos(dato)}>Asignar Turno</button>
  
                                <button onClick={()=>(editarPaciente(dato))}>Editar Paciente</button>
                              </td>
                            </tr>
                          ))):<tr><td>No se encontro el nombre de la mascota 🙁</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default MainPacientes