import React , {useState , useContext}from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} = useContext(UserContext);      // this is done of setting the user data or taking the user data for using the user data   
                                                    // we just have use user instead of setUser in the required component file 
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
        console.log(setUser)
    }

// Here's what happens step by step:

// Initially, user is null.
// When you call setUser({ username, password }):
// The state user now holds an object with two properties: { username, password }.
// In other components, when you access user, it's now an object, and you can access its individual properties (user.username, user.password).

  return (
    <div>
        <h1> Login </h1>
        <input 
        type='text' 
        placeholder='username'
        value={username}
        onChange={(e) => {setUsername(e.target.value)}}
        />
        <input 
        type='text'
        placeholder='password'
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        />
        <button type='submit'
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login
