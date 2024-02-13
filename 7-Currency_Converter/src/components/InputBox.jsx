import React, {useId} from "react";

function InputBox({
    label,   // from | to
    amount,  // total amount
    onAmountChange, 
    onCurrencyChange, 
    currencyOptions=[], 
    selCurrency="usd", 
    amountDisable=false,  
    currencyDisable=false, 
    className = ""}) {

    // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    const amountInputId = useId()

    return (
        // js css | if at any case user wants to set the css
        <div className={`bg-white p-3 rounded-lg text-lg flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"  
                    value={selCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                       
                    {currencyOptions.map((currency)=>(
                        // remember the key in react 
                        <option key={currency} value={currency}>   
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;