import React,{useContext} from 'react'
import userContext from '../context/UserContext'

function Proflile() {
    const {user}=useContext(userContext)
    
    if(!user) return <div>Please Login!</div>
    
    return <div>Wlecome {user.username}</div>
}

export default Proflile