import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import '../../style/main.css'

const ApiFect = () => {

    const [state, setstate] = useState([])
    const url = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                setstate(data.results)
            })
            .catch(console.warn)

        console.log("data", state)
    }, [url])

    return (
        <>
            <h1>Api Fetch</h1>
            <div className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">
                {
                    state.map(data => (
                        <Cards
                            key={data.id}
                            personaje={data}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default ApiFect
