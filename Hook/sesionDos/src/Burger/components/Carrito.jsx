import React, { useEffect, useState } from 'react'
import Burger from './Burger'

const Carrito = ({ carrito, setCarrito }) => {
    const [precioC, setPrecioC] = useState(0)

    let cum =0;
    carrito.forEach(burger => {
        let precio = burger.precio
        cum += precio
    });

    useEffect(() => {
        setPrecioC(cum)
    }, [cum])
    return (
        <div className="container text-center">
            {
                carrito.length === 0
                ?
                (
                    <p>No hay nada por aquí...</p>
                )
                :
                (
                    carrito.map(burge =>(
                        <Burger
                            key={burge.id}
                            burger={burge}
                            carrito={carrito}
                            setCarrito={setCarrito}
                        />
                    ))
                )
            }
            <h3>Total: {precioC}</h3>
        </div>
    )
}

export default Carrito
