import React ,  { useId }from 'react' // useId is a react hook for generating unique IDs that can be passed to accessbility attributes

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,// this is for making the input box more usable , if the programmer want not to use the amount then programmer can pass this value 
    currencyDisable = false,
    className = "",
}) 
{
   const amountInputId = useId()    // it is not necessary just for optimization 

    return (
         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> {/*<=this css is written in brackets becoz user can also put their css here therefore brackets are there */}
             <div className="w-1/2">                                      {/* and the css is coming from Input box function => className */}
                <label  htmlFor={amountInputId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>  onAmountChange && onAmountChange(Number(e.target.value))} // we are using condition for checking the onamount change value(there can be  possible chance if onAmountChange value is not pass)
                 />                                                          {/* sometimes event return the value in string that's why Numer is used here */}
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full ">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => { 
                       onCurrencyChange(e.target.value)}
                    }
                >
                    
                {currencyOption.map((currency) => (
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

