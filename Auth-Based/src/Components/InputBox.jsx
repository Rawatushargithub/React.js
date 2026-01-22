import React, { useId, useMemo, useState } from 'react' // useId is a react hook for generating unique IDs that can be passed to accessbility attributes

function InputBox(
    {
        label,
        amount, 
        onAmountChange,
        onCurrencyChange,
        currencyOption = [],
        selectCurrency = "usd",
        amountDisable = false,// this is for making the input box more usable , if the programmer want not to use the amount then programmer can pass this value 
        currencyDisable = false,
        className = "",
    }
) 
{
   const amountInputId = useId()    // it is not necessary just for optimization 
   const currencySearchId = useId()
   const [query, setQuery] = useState("")

   const filteredOptions = useMemo(() => {
     const q = query.trim().toLowerCase()
     if (!q) return currencyOption
     return currencyOption.filter((c) => c.toLowerCase().includes(q))
   }, [currencyOption, query])

    return (
         <div className={`bg-white/80 dark:bg-slate-950/40 ring-1 ring-black/10 dark:ring-white/10 p-3 rounded-lg text-sm flex ${className}`}> {/*<=this css is written in brackets becoz user can also put their css here therefore brackets are there */}
             <div className="w-1/2">                                      {/* and the css is coming from Input box function => className */}
                <label  htmlFor={amountInputId}
                className="text-slate-600 dark:text-slate-300 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-slate-900 dark:text-slate-100"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>  onAmountChange && onAmountChange(Number(e.target.value))} // we are using condition for checking the onamount change value(there can be  possible chance if onAmountChange value is not pass)
                 />                                                          {/* sometimes event return the value in string that's why Numer is used here */}
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-slate-600 dark:text-slate-300 mb-2 w-full">Currency Type</p>

                {/* Search (datalist) */}
                <input
                  list={currencySearchId}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search currency..."
                  className="mb-2 w-full rounded-lg bg-white px-2 py-1 text-left text-xs text-slate-900 ring-1 ring-black/10 outline-none dark:bg-slate-900/60 dark:text-slate-100 dark:ring-white/10"
                />
                <datalist id={currencySearchId}>
                  {currencyOption.map((currency) => (
                    <option key={currency} value={currency} />
                  ))}
                </datalist>

                <select
                    className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none text-slate-900 dark:bg-slate-900/60 dark:text-slate-100"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => { 
                       onCurrencyChange(e.target.value)}
                    }
                >
                    
                {filteredOptions.map((currency) => (
                     <option key={currency} value={currency}
                    >   {/*  if you want to made good performance in loop then always pass the key value */}
                    {currency}
                </option>
                ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

