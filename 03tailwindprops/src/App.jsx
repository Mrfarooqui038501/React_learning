import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  let username = {username: "Arman"}
  

  return (
    <>
      <h1 className='bg-blue-400 text-white p-4 rounded-xl mb-4' >
        Tailwind learning</h1>
       <Card username='Arman'/>
        

        

    </>
  )
}

export default App
