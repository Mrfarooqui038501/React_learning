import { useState } from 'react'
import './App.css'
// import DynamicInput from './UseState/Counter'
// import ToggleText from './UseState/Counter'
// import Counter from './UseState/Counter'
// import ToggleButton from './UseState/Counter'
// import Input from './UseState/Counter'
// import InputText from './UseState/Counter'
// import MultipleInput from './UseState/Counter'
// import CounterLimit from './UseState/Counter'
// import ToggleText from './UseState/Counter'
// import CharacterCount from './UseState/Counter'
import DynamicInput from './UseState/Counter'

function App() {
  // const [value, setValue]  = useState(1)
  // // const [multipliedValue, setMultipliedValue]  = useState(1)
  // let multipliedValue = value * 5;  // instead of  using one more usestate we simply used one variable 

  // const handleMultiplication=() =>{
  //     // setMultipliedValue(value * 5)
  //     setValue( value + 1)
  // }
 
  return (
    <>
    {/* <h1>Return value{value}</h1>
    <button onClick={handleMultiplication}>Click to Multiply by 5</button>
    <h2>Multiplied Value {multipliedValue}</h2> */}
    {/* <Counter/> */}
    {/* <ToggleButton/> */}
    {/* <Input/> */}
    {/* <InputText/> */}
    {/* <MultipleInput/> */}
    {/* <CounterLimit/> */}
    {/* <ToggleText/> */}
    {/* <CharacterCount/> */}
   <DynamicInput/>



    </>
  )
}

export default App

