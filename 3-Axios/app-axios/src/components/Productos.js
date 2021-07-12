import React, { Fragment } from 'react'
import ProductoLista from './ProductoLista'

const Productos = ({ productos, guardarRecargarProductos }) => {
    return (
        <Fragment>

            <h1 className="text-center">Precios</h1>
            <hr />
            <ul className="list-group mt-5">
                    <ProductoLista
                        productos={productos}
                        guardarRecargarProductos={guardarRecargarProductos}
                    />
            </ul>
        </Fragment>
    )
}

export default Productos
