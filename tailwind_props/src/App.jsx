import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Cards from './components/cards';
function App() {
  

  return (
    <>
     <div className='bg-green-400 text-black'> Tailwind Test </div>
     <Cards birdColor = "Green Parrot"  birdName = "pihuu"/>
     <Cards birdColor = "Yellow Parrot" birdName = "pihuu"/>  {/*here if i not provided the birdName then it print the default name present in cards.jsx */}
     
    </>
  )
}

export default App
