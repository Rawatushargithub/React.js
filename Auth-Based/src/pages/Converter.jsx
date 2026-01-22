import { useState } from 'react'
import InputBox from "../components/InputBox"
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import AppShell from "../Components/AppShell";
import ThemeToggleButton from "../Components/ThemeToggleButton";
 
function Converter() {
     const [amount , setAmount] = useState(0)
  const [from , setFrom ] = useState("usd")
  const [To , setTo ] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) // here the data is coming in the form of object and we have the keys value which is pass in options state in Input box 
 const options =  Object.keys(currencyInfo)

 const swap = () => {
    setFrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
 }
    const convert = () => {return setConvertedAmount( amount * currencyInfo[To])}
    const image = 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    return (
        <AppShell>
            <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                        Currency Converter
                    </h1>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        Convert between currencies using live rates.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggleButton />
                </div>
            </header>

            <section className="mt-6">
                <div
                    className="w-full rounded-2xl ring-1 ring-black/10 bg-cover bg-no-repeat p-6 sm:p-8 dark:ring-white/10"
                    style={{
                        backgroundImage: `url('${image}')`,
                    }}
                >
                    <div className="w-full max-w-md mx-auto rounded-2xl p-5 sm:p-6 backdrop-blur-sm bg-white/70 ring-1 ring-black/10 dark:bg-slate-950/40 dark:ring-white/10">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}
                        >
                            <div className="w-full mb-2 rounded-lg">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOption={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>

                            <div className="relative w-full h-0.5 py-6">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 top-6"
                                    onClick={swap}
                                >
                                    Swap
                                </button>
                            </div>

                            <div className="w-full mt-2 mb-4 rounded-lg">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOption={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={To}
                                    onAmountChange={(amount) => setAmount(amount)}
                                    amountDisable
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
                            >
                                Convert {from.toUpperCase()} to {To.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </AppShell>
    );
}

export default Converter