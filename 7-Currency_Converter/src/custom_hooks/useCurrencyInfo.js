import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    useEffect(() => {
        const [data, setData] = useState({})

        // the api given below is pretty interesting, when we give 'inr' in place of currency we can see all the conversion rate of inr -> any currency
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
    }, [currency])
    console.log(data);
    return data
}

// export default useCurrencyInfo