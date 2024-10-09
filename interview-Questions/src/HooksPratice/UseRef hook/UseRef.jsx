import React,{useState, useEffect, useRef} from 'react'



//1  in this application we use useref hook to count how manytimes a components is rendering 

// const CountApp = () =>{
// //  const [count, setCount] = useState(0);
//  const count = useRef(0)
//  const [input, setInput] = useState('')

//  useEffect(()=>{
//    count.current = count.current + 1;
//  })

//   return(
//     <div>
//         <input 
//         type="text" 
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         />
//          <p>NO. of times component render:{count.current} </p>
//     </div>
//   )
// }

// export default CountApp;

//2.  in this example we will create app to change the background colour on clicl

// const InputRef = () =>{
//     const input = useRef();

//     const CahngebackgroundColor = () =>{
//          input.current.focus();
//          input.current.style.backgroundColor = "#82E0AA"
//     }

//     return(
//         <div>
//         <input type="text" ref={input}/>
//          <br />
//     <button onClick={CahngebackgroundColor}>Submit</button>
//         </div>
//     )
// }

// export default InputRef;


// in this Application we will use cleanup function 

// function CleanUp(){
//     const input = useRef();

//     useEffect(()=>{
//         return () =>{
//             input.current= null
//         }
//     }, [])

//     return(
//         <div>
//             <input type="text" 
//             ref={input}
//             />
//         </div>
//     )
// }

// export default CleanUp;


// in this app we will access the dom element and will update the text using useref

// function UpdateText(){
//     const text = useRef(null)

//     const handleClick= () =>{
//     text.current.textContent = "I am updated text"
//     }

//     return(
//         <div>
//             <p ref={text}>I am current text</p>
//             <button onClick={handleClick}>Update the text</button>
//         </div>
//     )
// }

// export default UpdateText;


// in this application we will create the stopwatch using useref 

// const Stopwatch = () => {
//     const timer = useRef(null)
//     const [time, setTime] = useState(0)

//     useEffect(()=>{
//         timer.current = setInterval(() =>{
//            setTime((prevtime) => prevtime + 1)
//         },1000)
//         return ()=>  clearInterval (timer.current)
//     },[])

//     return(
//         <div>
//             <p>Time: {time}</p>
//         </div>
//     )
// }

// export default Stopwatch;



