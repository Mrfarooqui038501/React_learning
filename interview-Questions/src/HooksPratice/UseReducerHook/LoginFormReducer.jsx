// const reducer = (state,action) =>{
//     switch(action.type){

//         case "Update_Usernmae":
//             return{...state, userName: action.userName}

//         case "update_password":
//             return{...state, password: action.password}   
            
//         case "login":
//          return{...state, error: " "}
        
//         case "error":
//          return{...state,error: action.error}

//          default:
//             return state;

//     }
// }

// export default reducer;

// reducer for toggle button 
//  const reducer= (state, action) =>{
//     switch (action.type){
//         case 'Toggle':
//             return {...state, isVisible: !state.isVisible};

//          default:
//             return state;   
//     }
//  };

//  export default reducer;


// inout reducer

const reducer = (state, action) =>{

     switch(action.type){
        case "SetInput":
        return {...state, inputvalue:action.payload};
        default:
            return state;    
     }
}

export default reducer