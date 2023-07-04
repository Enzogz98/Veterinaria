import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const MainPacientes = () => {
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [direccion,setDireccion]=useState("");
    const [dni,setDni]=useState("");
    const [tel,setTel]=useState("");
    const [cuit,setCuit]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        postClientes()
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
  return (
    <>
        <div>
            <div>
                <input type="text" />
                <button>Buscar</button>
            </div>
            <br />
            <div>
                <button>Agregar Cliente</button>
                <button>Agregar Paciente</button>
                <br />
                <div>
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
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default MainPacientes