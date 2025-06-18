import React from 'react'
import {useState , useContext} from 'react'
import UserContext from '../context/UserContext' 

function Login(){
    const handleSubmit=(e)=>{
        e.preventDefault();
        setuser(username,password);
    };

    const [username,setusername] =useState("")
    const [password,setpassword] = useState("")

    const {setuser}= useContext(UserContext)

    return (
        <>
        <div >
            <h2>Login</h2>
            <input  value={username}
            onChange={(e)=>{
                setusername(e.target.value)
            }}
            type="text" placeholder="username" />
            <input 
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value);
            }}
            type="text" placeholder="password" />
            <button type="submit" onclick={handleSubmit}></button>
        </div>
        </>
    )
}

export default Login