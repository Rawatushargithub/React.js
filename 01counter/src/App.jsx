import { useState } from 'react'

import './App.css'

function App() {
 let [Counter , setCounter]  = useState(15)

 const addvalue = () => {
  //The answer is no the counter value will not increased four times becoz usestate send the updates in batches in a one go
  // fiber algo make these batches process more optimized

  // will these statement increase the counter value by 4 ?
  // Here these setCounter make a one batches becoz one work is repeat more than once
  // setCounter(Counter+1)
  // setCounter(Counter+1)
  // setCounter(Counter+1)
  // setCounter(Counter+1)
  
  // but if the condition arise to this work 4 times so we can use "prevCounter" <= it can be named anything prevCounter is bascially a existing state 
  // setCounter is a function and accept a callback 

  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((Counter) => Counter+1)
  setCounter((Counter) => Counter+1) 
 }
//  const addvalue = () =>  {
//   console.log("Before::" , Counter)
//   if(Counter>=20) return console.log("Value is greater than 20 " , Counter)
//     Counter = Counter+1
//     setCounter(Counter)
//   console.log("After:: " , Counter)
 
//  }
 const removevalue = () => {
  if(Counter<=0) return console.log("Value is less than 0" , 0)
  setCounter(Counter-1)
 }
  return (
    <>
        <h1> Counter  {Counter}</h1>
        <h2> Adding and Removing value</h2>

        <button onClick={addvalue}> Add Value {Counter}</button>
        <br/>
        <button onClick={removevalue}> Remove Value {Counter}</button>
    </>
  )
}

export default App
