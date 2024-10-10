import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=dd65ef9562bb4f5b87b99eea31d34e6b`)
        .then((res) => res.json())
        .then((res) => setData(res[rates]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;