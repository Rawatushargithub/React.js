import React from 'react'

function Cards({ birdColor , birdName = "maina"}) { // here if i not provide the birdName in app.jsx then this "maina" name get default name and can used in this cards.jsx file
  console.log(birdColor)
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://th.bing.com/th?id=OIP.t17ti8Buq2RB2RT7JIhMqgHaKH&w=213&h=292&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-me">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
       {birdColor}
      </div>
      <div>
      {birdName}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Cards
