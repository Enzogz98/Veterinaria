import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'
import MainPacientes from './components/MainPacientes'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/>
      <Route path='/pacientes' element={<MainPacientes/>}/>
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
