import React, { useState } from 'react'

const RickAdd = ({setCategoria}) => {

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        setCategoria(categorias=>[...categorias,search])
        setSearch('')
    }

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="search"
                placeholder="categories"
                value={search}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default RickAdd
