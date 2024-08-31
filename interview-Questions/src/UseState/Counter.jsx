import React, {useState, useEffect} from "react";


  //                              USESTATE
// 1. in this we have make  the counter application using usestate for the same we used one variable Count
/* function Counter(){
    const [count,  setCount] =  useState(0)


function InceaseValue(){
     setCount(count + 1) 
}

 function decreaseValue(){
    setCount(count -1 )
 }
    return(
        <div>
        <h1>Count: {count}</h1>
        <button onClick={InceaseValue}>Incrememmt</button>
        <button onClick={decreaseValue}>Decrement</button>
        </div>
    )
}

export default Counter; */

// 2.  In this app we will create a toggle button for On/OFF 

/* function ToggleButton(){

    const [ison, setIson] = useState(false)
    function ClickToToggle(){
        setIson(!ison)
    }
     

    return(
        <div>
            <p>{ison? "ON": "OFF"}</p>
            <button onClick={ClickToToggle}>Toggle</button>
        </div>
    )
}

export default ToggleButton */

// 3 Create an input field that displays the typed text below it.

// function Input(){
//      const[input, Setinput] = useState('')

//     return(
//         <div>
//              <input type="text" 
//                value={input}
//                onChange={(e) => Setinput(e.target.value)}
//                />
//                <p>{input}</p>
//         </div>
//     )
// }

// export default Input

// function InputText(){
//    const [text, Settext] = useState('');

    
//     return(
//         <div>
           
//              <input type="text" 
//                value={text}
//                onChange={(e) => Settext(e.target.value)}
//              />
//              <p>{text}</p>
//         </div>
//     )
// }

// export default InputText;

// function MultipleInput(){
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
  
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         alert(`Submitted username:${username} Submitted Email:${email}`)
//         setUsername("")
//         setEmail("")
//     }   

//     return(
//       <form onSubmit={handleSubmit}>

//              <input type="text" 
//              value={username}
//              onChange={(e) => setUsername(e.target.value)}
//              placeholder='Username'
//              />
  
//              <input type="text"
//              value={email} 
//              onChange={(e) => setEmail(e.target.value)}
//              placeholder="email"
//              />

//              <button type="submit">Submit</button>
//              <p>Username: {username}</p>
//              <p>Email: {email}</p>
//       </form>
//     )
//   }
//    export default MultipleInput;

    
  // 5,6 increase count by certain limit and place a reset button
//    function CounterLimit(){
//     const[value, setValue] = useState(0)

//     // const handleSubmit = ()=>{
//     //     setValue(0)

//     // }

//     return(
//         <div>
//               <p>Count: {value}</p>
//               <button onClick={() => setValue(value + 5)}>Increment by </button>
//               {/* <button onClick={handleSubmit}>Reset</button> */}
//               <button onClick={() => setValue(0) }>Reset</button>
//         </div>
//     )
//    }

//    export default CounterLimit;

// function ToggleText() {
//     const[isvisible, setIsvisible] = useState(true)

//    return(
//     <div>
//           { isvisible && <p>Click and make me invisible</p>}
//           <button onClick={() => setIsvisible(!isvisible)}> 
//             {isvisible?'hide':"show"}Invisible</button>
//     </div>
//    ) 
// }

// export default ToggleText

// const ToggleText = () => {
//     const [isVisible, setIsVisible] = useState(true);
  
//     return (
//       <div>
//         {isVisible && <p>Here is some toggled text</p>}
//         <button onClick={() => setIsVisible(!isVisible)}>
//           {isVisible ? 'Hide' : 'Show'} Text
//         </button>
//       </div>
//     );
//   };
  
//   export default ToggleText;

// 10 character count and withReset button 

// function CharacterCount(){
  
//     const[text, setText] = useState("")

    

//     return(
//         <div>
//             <textarea 
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Type here..."
//             />
//            <p> Characters Count: {text.length}</p>
//            <button onClick={() => setText('')}>Reset</button>
//         </div>
//     )
// }
// export default CharacterCount;

// 9   Dynamic input list
// const DynamicInput = () =>{
   
//     const[inputs, setInputs] = useState(['']);

//     const HandleChange = (index, value) => {
//      const newInput  = [...inputs];
//        newInput[index] = value
//        setInputs(newInput)

//     }

//    const HandleInputs = () => {
//     setInputs([...inputs, ''])
//    }

//    const HandleReset =(e,index,value) =>{
//       e.preventDefault();
//       setInputs([...[]])
//    }

//     return(
//         <div>
//             {inputs.map((input,index)=>
//           <input type="text" 
//           value={input}
//           onChange={(e) => HandleChange(index,e.target.value)}
//           placeholder={`Input ${index +  1}`}
//           />   
//           )}
//           <button onClick={HandleInputs}>Add More Inputs</button>

//           <button onClick={HandleReset}>Reset</button>
//         </div>
//     )
// }

// export default DynamicInput;

//                                             USEEFFECT

// 1. Create a timer that counts up every second. (Timer)

function Timer(){
    const[seconds, setSeconds] =  useState(0)
    
    useEffect(() =>{
        
    },
    [])

    return(
        <div>
           return <h1>Seconds passes:{seconds}</h1>
        </div>
    )
}