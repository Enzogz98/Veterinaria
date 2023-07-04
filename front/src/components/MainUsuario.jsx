import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Usuario = () => {
  const [datos, setDatos] = useState(null);
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [email,setEmail]=useState("")
  const [nick,setNick]= useState("")
  const [pass,setPass]=useState("")
  const [estado,setEstado]= useState(true)
  const [rol,setRol]=useState("")
  const [permisos,setPermisos]=useState(1)
  const [idUsuario,setIdUsuario]=useState(0)
  
  
  const mostrar = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuario")
            const dataArray = response.data;
            setDatos(dataArray);
            } catch(error){
            console.error(error)
        }
      
    };
    const edicion = (usuario) =>{
      setIdUsuario(usuario.id)
      setNombre(usuario.nombre)
      setApellido(usuario.apellido)
       setEmail(usuario.email)
       setNick(usuario.nick)
       setPass(usuario.pass)
       setEstado(usuario.estado)
       setRol(usuario.nombreRol)
       setPermisos(usuario.permisos)
    }

    
    const agregarUsuario= async () =>{
      try{
        const response = axios.post("http://localhost:3000/usuario", {
          nombre,
          apellido,
          email,
          nick,
          pass,
          estado,
          rol,
          permisos

        })
        if(response.status===200){
          alert("Se cargo un usuario")
          mostrar();
        }
      } catch{
        alert("hubo un error en la carga de usuarios")
      }
    }
    const modificarUsuario= async () =>{
      try{
        const response= await axios.put("http://localhost:3000/usuario",
          {
          idUsuario,
          nombre,
          apellido,
          email,
          nick,
          pass,
          estado,
          rol,
          permisos})
          if(response.status===200){
            alert("se hizo la modificacion correctamente")
            mostrar()
          }else{
            alert("hubo un error en la modificacion de datos")
          }

      } catch{
        alert("Hubo un error en la consulta")
      }
    }

  
    const borrarUsuario = async (usuario) =>{
      console.log(usuario)
      try{
        const response = await axios.delete(`http://localhost:3000/usuario/delete/${usuario.id}`)
        if (response.status===200){
          alert("se elimino el error correctamente")
          mostrar();
        } else{ 
          alert("error en la eliminacion")
        }

      } catch{
        alert("error en la consulta")
      }
    }

    // const eliminarUsuario =async (id)=> {
    //   try{
    //     const response = await axios.delete(`http://localhost:3000/usuario/${id}`)
    //     if (response.status===200){
    //       alert("se elimino el error correctamente")
    //       mostrar();
    //     } else{ 
    //       alert("error en la eliminacion")
    //     }

    //   } catch{
    //     alert("error en la consulta")
    //   }
    // }


    
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
        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        <br />
        <label htmlFor="">Ingrese el apellido del nuevo usuario</label>
        <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
        <br />
        <label htmlFor="">Ingrese el email del nuevo usuario</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="">Ingrese el nickname del nuevo usuario</label>
        <input type="text" value={nick} onChange={(e)=>setNick(e.target.value)}/>
        <br />
        <label htmlFor="">Ingrese la contraseña del nuevo usuario</label>
        <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/> 
        <br />
        <label htmlFor="">Ingresa el estado del nuevo usuario</label>
        <input
          type="checkbox"
          checked={estado}
          onChange={(e) => setEstado(e.target.checked)}
        />
        <br />
        <label htmlFor="">Ingresa el rol del nuevo usuario</label>
        <input type="text" value={rol} onChange={(e)=>setRol(e.target.value)}/>
        <br />
        <label htmlFor="">Ingresa los permisos del nuevo usuario</label>
        <input type="number" value={permisos} onChange={(e)=>setPermisos(e.target.value)} />

        <br />
        
        <button type="submit" onClick={agregarUsuario}>Ingrese un nuevo usuario</button>
        <button type="button" onClick={modificarUsuario}>Modificar</button>
        <br />
        <br />
        <br />
        
     </form>
     {datos !== null ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Nickname</th>
              <th>Contraseña</th>
              <th>Estado</th>
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
                <td>{obj.nick}</td>
                <td>{obj.pass}</td>
                <td>{obj.estado}</td>
                <td>{obj.nombreRol}</td>
                <td>{obj.permisos}</td>
                <td><button onClick={() => edicion(obj)}>Modificar</button></td>
                <td><button onClick={() => borrarUsuario(obj)}>Eliminar</button></td>
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
