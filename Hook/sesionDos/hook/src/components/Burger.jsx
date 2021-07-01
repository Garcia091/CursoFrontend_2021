import React from 'react'

const Burger = ({ burgerC, burger, carrito, setCarrito }) => {
    const card = {
        width: "200px"

    };

    const { id, image, nombre, precio } = burger

    const addBurger = (id) => {
        const burFilter = burgerC.filter((burger) => burger.id === id)
        setCarrito([...carrito, ...burFilter])
        console.log(carrito)
    }

    const deleteBurger = (id) => {
        const deleteB = carrito.filter((carrito) => carrito.id !== id)
        setCarrito(deleteB)
    }

    console.log(carrito)

    return (
        <div className="container text-center" style={card}>
            <div className="col">
                <div className="card text-white bg-dark mb-3">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{precio} </h6>
                    </div>
                    <div className="py-3">
                        {
                            burgerC
                                ?
                                (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => addBurger(id)}>Comprar
                                    </button>
                                )
                                :
                                (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteBurger(id)}>Eliminar
                                    </button>

                                )
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Burger
