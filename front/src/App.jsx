import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'
import Pacientes from './pages/Pacientes'
import Turnos from './pages/Turnos'
import Veterinarios from './pages/Veterinarios'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/>
      <Route path='/pacientes' element={<Pacientes/>}/>
      <Route path='/turnos' element={<Turnos/>}></Route>
      <Route path='/veterinarios' element={<Veterinarios/>}></Route>
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
