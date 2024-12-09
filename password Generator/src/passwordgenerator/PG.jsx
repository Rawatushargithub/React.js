import { useState, useCallback , useEffect , useRef } from "react"; //useCallback is a React Hook that lets you cache a function definition between re-renders.
//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
function PG() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    // callback is used for optimizing the code becoz it put our function in cache memory due to which it can access quickly when reuse again in number and character allowed time
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()-_+=[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // here we get the number or index
      pass += str.charAt(char);
    
    }

    setPassword(pass);
   
  }, [length, numberAllowed ,charactersAllowed, setPassword]); // here setPassword is responsible for memorizining the function in cache memory 
const copyPasswordToClipBoard = useCallback(() => {
  passwordref.current.select()
  passwordref.current.setSelectionRange(0 , 10)
  window.navigator.clipboard.writeText(password)
} , [password])

  useEffect(()=>{
    passwordgenerator()
  } , [length , numberAllowed , charactersAllowed , passwordgenerator]) // here we do if koi bhi change ho in dependencies mey to phir se run kar do password Generator ko 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700">
        <h1 className="text-white text-center my-3"> Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordref}
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-blue-500  "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 accent-blue-500">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                
                setnumberAllowed((prev) => !prev);
                
              }}
              //onChange={() => {
              //  setnumberAllowed(true)    // this can't be done becoz if we do this the value of numberAllowed become true and never be changed to false bhleey hi check box mark ho rha ha ya nhi 
              //  console.log(numberAllowed)    // there the above approach is followed (prev) => {!prev}
              //  }
              //}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 accent-blue-500">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="charactersInput"
              onChange={() => {
                setcharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PG;
