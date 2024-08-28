import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue]  = useState(1)
  // const [multipliedValue, setMultipliedValue]  = useState(1)
  let multipliedValue = value * 5;  // instead of  using one more usestate we simply used one variable 

  const handleMultiplication=() =>{
      // setMultipliedValue(value * 5)
      setValue( value + 1)
  }
 
  return (
    <>
      <h1>Return value{value}</h1>
      <button onClick={handleMultiplication}>Click to Multiply by 5</button>
      <h2>Multiplied Value {multipliedValue}</h2>
      
    </>
  )
}

export default App
