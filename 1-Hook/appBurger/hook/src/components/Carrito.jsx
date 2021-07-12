import React, { useEffect, useState } from 'react'
import Burger from './Burger'

const Carrito = ({ carrito, setCarrito }) => {

    const [precioH, setPrecioH] = useState(0)
    let acum = 0;

    carrito.forEach(burger => {
        let precio = burger.precio
        acum += precio
    })

    useEffect(() => {
        setPrecioH(acum)
    }, [acum])

    console.log(acum)

    return (
        <div className="container text-center ">
          
            {
                carrito.length === 0
                    ?
                    (
                        <p>No hay nada por aquí...</p>
                    )
                    :
                    (
                        carrito.map((burger) => (
                            <Burger
                                key={burger.id}
                                burger={burger}
                                carrito={carrito}
                                setCarrito={setCarrito}
                            />
                        ))

                    )
            }
            <h3>Total: {precioH}</h3>
        </div>
    )
}

export default Carrito
