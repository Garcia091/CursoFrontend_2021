import { useState } from "react";

 const useFetch = () => {

    const [burger, setBurger] = useState([])

    const burgerInf = async () => {
        const url = `http://localhost:3004/Burger`
        const resp = await fetch(url);
        const  data  = await resp.json();
        console.log(data)
        setBurger(data)
    }

    burgerInf()
    return {
        burger, burgerInf
    }
}
export default useFetch


