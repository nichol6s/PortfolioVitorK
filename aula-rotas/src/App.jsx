import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
    <Menu/>
    <Outlet/>
    <Rodape/>
    </>
  )
}

export default App
