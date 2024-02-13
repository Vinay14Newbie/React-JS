import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {

        // the api given below is pretty interesting, when we give 'inr' in place of currency we can see all the conversion rate of inr -> any currency
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;