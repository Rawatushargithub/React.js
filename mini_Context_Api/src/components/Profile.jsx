import React , {useContext}from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);   
    console.log(user);
    if(!user) return <div> Please Login </div>

    return <div>Welcome :: {user.username}</div>
}

export default Profile

// Here's what happens step by step:

// Initially, user is null.
// When you call setUser({ username, password }):
// The state user now holds an object with two properties: { username, password }.
// In other components, when you access user, it's now an object, and you can access its individual properties (user.username, user.password).
