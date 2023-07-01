import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const MainHome = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    localStorage.getItem("login") ? console.log('login'): navigate("/")
  }, [])
  const storeData= JSON.parse(localStorage.getItem("userData"))
  console.log(storeData)
  const logOut = ()=>{
    localStorage.removeItem('userData')
    localStorage.removeItem('login')
    navigate("/")
  }
  
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
  )
}

export default MainHome