 import React,{createContext, useState } from "react";


//  const AppContext = createContext();

//  const AppProvider = ({children}) => {
//    const user = {
//     name:"Arman",
//     age:25,
//     email:"arman@gmail.com"
//    }
//    return(
//     <AppContext.Provider value={user}>{children}</AppContext.Provider>
//    )
// };

//  const useGlobalContext = () =>{
//     return useContext(AppContext);
// }

// export {AppContext,AppProvider, useGlobalContext}

// import { createContext } from "react";
// import Child from "./Child";


// const AppContext = createContext();

// function Parent(){
//     const bike = {
//         name:"R15",
//         price:500000

//     }

//     return(
//         <AppContext.Provider value={bike}><Child/></AppContext.Provider>
//     )
// }

// export {AppContext, createContext, Parent}

const ThemeContext = createContext("Light")

function ThemeProvider({children}){
    const[theme, SetTheme] = useState('Light')

    return(
        <ThemeContext.Provider value={{theme, SetTheme}}> {children}</ThemeContext.Provider>
    )
}

export default {ThemeProvider, ThemeContext};


