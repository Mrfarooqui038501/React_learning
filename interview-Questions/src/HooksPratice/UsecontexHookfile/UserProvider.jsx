import React, {useState} from "react";

import { UserContext } from "./UserContext";

const UserProvider = ({children}) =>{
    const [user,setUser]  = useState({
        name:"Arman",
        age:25,
        email: "arman@gmal.com",
    })


return(
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
)
};
export default UserProvider