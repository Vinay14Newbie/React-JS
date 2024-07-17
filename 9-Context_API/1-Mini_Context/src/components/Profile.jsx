import { useContext } from "react";
import React from "react";
import UserContext from "../context/UserContext";


function Profile(){
    // to use values in Context Or Global Context first declare it
    // const {user} = useContext(UserContext)  //object destructuring, you're directly getting the 'user' value from the Provider
    // const user3 = useContext(UserContext)
    const setUser = useContext(UserContext)  
    // console.log(user3); // {user: null, name: 'vinay', setUser: ƒ}
    // console.log(user);  // null
    // console.log(setUser);   //{user: null, name: 'vinay', setUser: ƒ}
    
    if(!setUser.user) return <div>Please Login</div>

    return (
        <>
            {/* in the case of use is type of array */}
            {/* <div>Welcome {user[1]}...</div> */}

            {/* in the case of user is type of object */}
            <div>Welcome {setUser.user.userName}...</div>

            <p>Greetings from {setUser.name}</p>
        </>
    )
}

export default Profile