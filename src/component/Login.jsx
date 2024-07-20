import React,{useState,useContext} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const {setUser}=useContext(userContext) //setUser is comming form UserContextProvider

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
        // console.log("i was clicked")
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' className='bg-black rounded-md text-white'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {"  "}
        <input type='text' className='bg-black rounded-md text-white'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button className='bg-green-400 rounded-md ' onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login