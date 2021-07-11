import React from 'react'

const Burger = ({ burgers, burger, carrito, setCarrito }) => {

    const { id, image, nombre, precio } = burger
    const card = {
        width: "200px"
    }
    const handleAddBuerger = (id) => {
        const burFiltro = burgers.filter((burger) => burger.id === id)
        setCarrito([...carrito, ...burFiltro])
        console.log(carrito)
    }

    const handleDeleteBuerger = (id) => {
        const deleteB = carrito.filter((carrito) => carrito.id !== id)
        setCarrito(deleteB)
    }

    return (
        <div className="container text-center" style={card}>
            <div className="col">
                <div className="card text-white bg-dark mb-3">
                    <img src={image} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{precio}</h6>
                    </div>
                    <div className="py-3">
                        {
                            burgers
                                ?
                                (<button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleAddBuerger(id)}
                                > Comprar</button>
                                )
                                : (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteBuerger(id)}
                                    > Eliminar</button>
                                )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger
