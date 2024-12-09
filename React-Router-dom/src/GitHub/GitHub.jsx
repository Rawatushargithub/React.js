import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // here we get a loader hook from router-dom 
function GitHub() {
    const data = useLoaderData()
    // as soon as the components load then the useEffect will call automatically
    // const [data , setdata] = useState([])
    // useEffect(() => {
       
    //     fetch('https://api.github.com/users/pawan-kumar-108')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data);
    //     })
    // } , [])
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pawan-kumar-108')
    return response.json()
}
