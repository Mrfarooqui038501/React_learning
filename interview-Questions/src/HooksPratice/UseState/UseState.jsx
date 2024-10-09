import React,{useState} from "react";


// const  Count = () => {
// const [count, setCount] = useState(0)

//     return(
//  <>
   
//  <button onClick={() => (count < 20? setCount (count + 1): setCount( count + 5))}>Increment</button>
         
//  <h1>Count: {count}</h1>

//  <button onClick={() =>(count === 0? setCount(0) : setCount(count -1))}>Decrement</button>

//  <button onClick={() => setCount(0)}>Reset the count to: {0}</button>
//  </>
//     )
// }
// export default Count;


//  Creating form using use effect and storing the data for backend purpose 



// import React, { useState } from "react";
// import styled from "styled-components";

// const UseStateObject = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   });

//   const handleInput = (event) => {
//     const name = event.target.name;

//     const value = event.target.value;

//     setFormData((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="card">
//           <h2 className="card-title text-center">Register</h2>
//           <div className="card-body py-md-4">
//             <form>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="username"
//                   placeholder="Name"
//                   autoComplete="off"
//                   value={formData.username}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   autoComplete="off"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleInput}
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   placeholder="Password"
//                   autoComplete="off"
//                   value={formData.password}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="confirm-password"
//                   name="confirm_password"
//                   placeholder="confirm-password"
//                   autoComplete="off"
//                   value={formData.confirm_password}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div className="d-flex flex-row align-items-center justify-content-between">
//                 <button className="btn btn-primary">Create Account</button>
//               </div>
//             </form>
//             <div>
//               <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   h2 {
//     font-size: 2.4rem;
//     margin: 3.2rem 0;
//   }
//   a {
//     color: #333;
//   }
//   a:hover {
//     color: #da5767;
//     text-decoration: none;
//   }
//   .card {
//     border: 0.1rem solid #f8f9fa;
//     padding: 0 3.2rem;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 1.2rem;
//   }

//   .form-control:focus {
//     color: #000000;
//     background-color: #ffffff;
//     border: inset 0.5rem solid #da5767;
//     outline: 0;
//     box-shadow: none;
//   }

//   input {
//     width: 25rem;
//     padding: 1rem 2rem;
//     font-family: "Work Sans", sans-serif;
//     outline: 0;
//     border: none;
//     font-size: 1.2rem;
//   }

//   .btn {
//     padding: 0.6rem 1.2rem;
//     background-color: #df8c96;
//     border-color: #df8c96;
//     margin-bottom: 3.2rem;
//   }

//   .btn-primary:hover {
//     background: #da5767;
//     border: inset 0.2rem solid #da5767;
//     transition: 0.3s;
//   }
// `;


// creating toggle button 

// function Toggle(){
// const [isOn, setIson] = useState(false)

// const Toggle = () =>{
//   setIson(!isOn)
// };

// return(
//   <div>
//     <button onClick={Toggle}>{isOn?"hide": 'show'}</button>
//     {isOn && <p>Hey there do you wanna learn react </p> }
//   </div>
// )

// }

// export default Toggle;


// now we will create an app where use details will be shown

// function Input(){
//   const [input, setInput] = useState('');

//   // const handleChange = (event) => {
//   //   console.log(eve)
//   //      setInput(event.target.value)
//   // }

//   return(
//     <div>
//       <input type="text"
//        value={input}
//        placeholder="Enter text"
//        onChange={(event) => setInput(event.target.value) }

//       />
//       <p>Used Credentials: {input}</p>
//     </div>
//   )
// }

// export default Input;

// function RandomNumber() {
//   const [random, setRandom] = useState(0)

//   const numberGenerate = () => {
//     const digits = Math.floor(Math.random() * 10000)
//     setRandom(digits)
//   }

//   return(
//     <div>
//       <p>Random number {random}</p>
//       <button onClick={numberGenerate}>Generate Number</button>
//     </div>
//   )
// }

// export default RandomNumber


//Now we will create  dark mode toggle button 
// function DarkMode(){
//   const [isDarkMode, setIsDarkMode] = useState(false);

//     const handleClick = () => {
//       setIsDarkMode(!isDarkMode)
//     }
//   return(
//     <div>
//       <button onClick={handleClick}>{isDarkMode?"LightMode": "DarkMde"}</button>
//        <p>click to switch between dark and light mode</p>
//     </div>
//   )
// }

// export default DarkMode;


// In this code we will create countdown timer

function CountdownTimer(){
const [countDown, setCountDown] = useState(0)

return(
  <div>
    
  </div>
)
}