import { useState } from "react";
function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="  fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" border-red-500 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setcolor("red")}   // onclick is a method which expect the function in it or it want to pass the function in it(onclick method)
            //onClick = {setcolor} <= here we pass the reference of setcolor (it is itself a function) but here we can't gave the parameter like setcolor("red") <= this thing we can't do becoz this setColor fucntion execute
            // and gave a return value which go to onClick method which is not acceptable 
            // therefore we gave the callback function and that we used setColor which returns the value 

            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("olive")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setcolor("grey")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            grey
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setcolor("purple")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setcolor("lavender")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setcolor("white")}
            className="px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setcolor("black")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
