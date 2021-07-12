import React, { useState ,useRef, useEffect} from 'react'

const RickAdd = ({setCategoria}) => {

    const [search, setSearch] = useState('')
    const searchref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault() 
        setCategoria(categorias=>[search, ...categorias])
        setSearch('')
    }

    useEffect(() => {
        searchref.current.focus()
    }, [])

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="search"
                ref={searchref}
                placeholder="categories"
                value={search}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default RickAdd
