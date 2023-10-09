import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'

function App() {
  const [change, setChange] = useState("")
  const [boton, setBoton] = useState("")
  const handleBoton = ()=> {
setBoton(change)
  }
  return (
    <>
<div className='flex flex-col h-[100vh] justify-center items-center'>
  <Input nombre="nombre" placeholder="Ingrese su nombre" value={change} setvalue={setChange}/>
    <Input nombre="contra" placeholder="Ingrese su contraseña"  />
   <button className='bg-black p-3 rounded-2xl text-green-200' onClick={handleBoton}>hola {boton}</button> 

   </div>
      
    </>
  )
}

export default App
