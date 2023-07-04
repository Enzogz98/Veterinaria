import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Usuario = () => {
  const [datos, setDatos] = useState(null);
  
  
  const mostrar = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuario")
            const dataArray = response.data;
            setDatos(dataArray);
            } catch(error){
            console.error(error)
        }
      
    };
   

    
  useEffect(()=>{
    if(datos!==null){
        console.log(datos)
    }
    else{
      mostrar()
    }
    
  }, [datos])

  return (
  <>
     <form action="">
        <label htmlFor="">Ingrese el nombre del nuevo usuario</label>
        <input type="text" />
        <br />
        <label htmlFor="">Ingrese el apellido del nuevo usuario</label>
        <input type="text" />
        <br />
        <label htmlFor="">Ingrese el email del nuevo usuario</label>
        <input type="text" />
        <br />
        <label htmlFor="">Ingrese el nickname del nuevo usuario</label>
        <input type="text" />
        <br />
        <label htmlFor="">Ingrese la contraseña del nuevo usuario</label>
        <input type="text" />
        <br />
        
     </form>
     {datos !== null ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Permisos</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.nombre}</td>
                <td>{obj.apellido}</td>
                <td>{obj.email}</td>
                <td>{obj.nombreRol}</td>
                <td>{obj.permisos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos para mostrar</p>
      )}
    </>
  );
};

export default Usuario;
