import React, { useState } from 'react'
import RickAdd from './RickAdd'
import RickCard from './RickCard'

import '../style/main.css'

const RickMortyApp = () => {


    const [categoria, setCategoria] = useState(['Rick and Morty'])

    return (
        <>
            <h1>App con Hook</h1>
            <RickAdd
                setCategoria={setCategoria}
            />

            <ol>
                {
                    categoria.map((data, index) => (
                        <RickCard
                            key={index}
                            data = {data}
                        />
                    ))
                }
            </ol>

        </>
    )
}

export default RickMortyApp
