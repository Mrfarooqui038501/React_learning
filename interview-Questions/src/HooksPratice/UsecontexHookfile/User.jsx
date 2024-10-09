import React from "react";

import {useUserContext } from "./UserContext";

const User = () =>{
    const {user} = useUserContext();

    return(
        <div>
            <h2>UserInformation</h2>
            <p>Name:{user.name} </p>
            <p>Age:{user.age} </p>
            <p>Email:{user.email} </p>

        </div>
    )
}

export default User;