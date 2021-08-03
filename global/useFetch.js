import React from 'react'

const useFetch = ( url ) => {
    
    const [drinkData, setDrinkData] = React.useState();
    const [status, setStatus] = React.useState("idle");

    React.useEffect(() => {
        setStatus("loading")
        fetch(url)
        .then((response) => response.json()
        .then((data) => {
            if(data.drinks === null){
                setStatus("error");
            } else {
                setDrinkData(data);
                setStatus("success");
            }
        }))
        .catch(error => setStatus("error"))
    }, [url]);

    return { drinkData , status }
}

export default useFetch;