import React,{useReducer} from "react";
// import reducer from "./LoginFormReducer";
// import reducer from "./LoginFormReducer"
// import reducer from "./LoginFormReducer";
import reducer from "./LoginFormReducer";


// const initilaState = {
//   userName:"",
//   password:"",
//   error:""
// }
// function Form(){

//     const[state, dispatch] = useReducer(reducer, initilaState);

//     return(
//         <div>
//             <input type="text"
//             placeholder="name"
            
              
//               />
//         </div>
//     )

// }
// export default Form;


// no we will create toogle button 

//  const initialstate = {
//     isVisible: false,
//  }

//  function Toggle(){
 
 
//  const [state, dispatch] = useReducer(reducer, initialstate)

//     return(
//         <div>
//          <button onClick={() => dispatch({tye:"Toggle"})}>Toggle</button>
//          {state.isVisible && <p> click to visible the message</p> }
//         </div>
//     )
// }

// export default Toggle;

// now we will create input field 

function Input(){
      const initialState ={
        inputvalue:"",
      }

    const[state, dispatch] = useReducer(reducer,initialState);

    return(
        <div>
              <input type="text"
              value={state.inputvalue}
              onChange={(e) => dispatch({type:'SetInput', payload:e.target.value})}
              />
              <p>Input value: {state.inputvalue} </p>
        </div>
    )
};

export default Input;