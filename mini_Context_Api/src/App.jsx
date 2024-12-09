import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider> {/*now in the app.jsx all the components set between these provider will have the access of values given to userContext provider */}
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
