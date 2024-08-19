import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)  /*here we made a varible and it takes input in array 
  form "setcounter" we can give it any name but it's good pratice to use the variable name and in usestate we set initial count to  0   */

  const increaseCount = () =>{
    
    // below we made a check  if count is 20 it will not go  further
    if(counter < 20){     
      //counter =  counter +1   
      setCounter(counter + 1 )  // here we are increasing the counter by 1 
    }
    
  }    

  const decreaseCount = () =>{
     if(counter > 0){
      // counter =  counter - 1
      setCounter(counter -1)
     }
    
  } 
  
  return (
    <>
      
      <h1> Arman and react</h1>
      <h2> Counter Value:{counter}</h2>
      {/* in the button we added an even onclick means when we want to change the variable  */}
      <button onClick={increaseCount}>Increase count </button> 
      <br />
      <button onClick={decreaseCount}>Decrease count </button> 
      <p>Total count:{counter}</p>
    </>
  )
}

export default App
