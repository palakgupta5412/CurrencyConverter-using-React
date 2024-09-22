import {useEffect , useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log('API Response:', res); // Log API response to check it
                setData(res[currency]);
            })
            .catch((err) => {
                console.error('Error fetching API:', err);
            });
    }, [currency]);

    return data;
}


export default useCurrencyInfo;