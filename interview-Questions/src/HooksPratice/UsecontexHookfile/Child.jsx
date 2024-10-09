// import React,{useContext}from "react";

// // import { AppContext} from "./Usecontext";
// import { useGlobalContext } from "./Usecontext";

// const Child = () =>{
//     const user = useGlobalContext();
//     console.log("gettting user data",user)

//     return(
//         <div>
//             Child = MY name is {user.name} <br />
//             and my age is:{user.age} <br />
//             my email is:{user.email}.{" "}
//         </div>
//     );
// };

// export default Child;


//  import { Parent } from "./Usecontext"; 

 import { useContext } from "react";
 import { AppContext } from "./Usecontext";

 function Child(){
        
    const bike = useContext(AppContext)
    console.log('Bike details',bike)

    return(
        <h1>my bike {bike.name} and price is {bike.price} </h1>
    )
 }

 export default Child;