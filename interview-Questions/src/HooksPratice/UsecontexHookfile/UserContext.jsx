import React, {useContext} from "react";
import ThemeProvider from "./Usecontext";
import ThemeContext

// const UserContext = createContext();

// const useUserContext = () =>{
//     return useContext(UserContext);
// }

// export {UserContext, useUserContext}
function MyComponents(){
    const {theme,SetTheme} = useContext(ThemeContext)
      return(
        <div>
            <button onClick={() => SetTheme(theme === "light"? "dark":"light")}> Toggle Theme</button>
        </div>
      )
    }
    
    export default MyComponents