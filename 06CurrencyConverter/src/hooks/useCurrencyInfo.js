// these hooks are purely javascript and return only js
// these custom hooks can used builtin hooks or react
// for making custom hooks we use keyword "use" this is the standard approach of making hooks (custom)

import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({}) // if data is not set then setData become empty string 
    useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    } , [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo

