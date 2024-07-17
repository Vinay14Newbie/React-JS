import React from "react";
import UserContext from "./UserContext";

// children which is prop, use it as it is
// it can be any component like card or dashboard or header or footer
const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)

    // const [customer, setCustomer] = React.useState('hitesh')
    
    return(
        // passing the value || prop
        // here the {children} is Login and Profile components which is wrapped inside the Provider
        // value can be accessed by all components

        // <UserContext.Provider value={{user, setUser, name:"vinay", customer}}> //this is how we can send multiple values inside value

        <UserContext.Provider value={{user, setUser, name:"vinay"}}>  
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider