import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Usuario = () => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const mostrar = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuario")
            setDatos(response.data);
            } catch(error){
            console.error(error)
        }
      
    };
    mostrar()
  }, []);
  useEffect(()=>{
    if(datos!==null){
        console.log(datos)
    }
    
  }, [datos])

  return (
  <>
     <form action="">
        <label htmlFor="">Ingrese el nombre del nuevo usuario</label>
        <input type="text" />
        <label htmlFor="">Ingrese el apellido del nuevo usuario</label>
        <input type="text" />
        <label htmlFor="">Ingrese el email del nuevo usuario</label>
        <input type="text" />
        <label htmlFor="">Ingrese el nickname del nuevo usuario</label>
        <input type="text" />
        <label htmlFor="">Ingrese la contraseña del nuevo usuario</label>
        <input type="text" />
        
     </form>
  </>
  )
};

export default Usuario;
