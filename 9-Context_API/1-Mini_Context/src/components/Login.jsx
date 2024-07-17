import React, {useState, useContext} from "react"; 
// useContext heps to fetch the data from UserContext
import UserContext from "../context/UserContext";

function Login(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // object-destructuring
    const {setUser} = useContext(UserContext)  //here we're directly taking 'setUser' which is setter(function who set the value) of the 'user'
    // const {user} = useContext(UserContext) 
    // console.log(user);   //null

    // ***********other ways***********
    // const User = useContext(UserContext) 
    // console.log(User);  //{user: null, name: 'vinay', setUser: ƒ}
    // it access the setUser which is already defined in the UserContextProvider
    // useContext hook helps to use any values inside the Context which  is provided by Provider

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName, password})

        // User.setUser([userName, password])   //here the user data-type is array
        
        // you can also set as below if 'User' is taken
        // User.setUser({userName, password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="usename" 
            />
            {"  "}
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" 
            />
            {"  "}
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login