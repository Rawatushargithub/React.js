import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Header from './components/Header/Header'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/ContactUs/Contact'
import User from './components/User/user'
import GitHub, { githubInfoLoader } from './GitHub/GitHub'

//Their are two ways of creating router First is following
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       } ,
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//

//The following is the second way of router 
const router = createBrowserRouter( 
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route 
    loader={githubInfoLoader}           // with the help of loaders we can directly make an API call in this project when the mouse is on github text then the fetch get start and it fetch the data and stored in cache memeory and gave a smooth experience
    path='github' element={<GitHub/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
