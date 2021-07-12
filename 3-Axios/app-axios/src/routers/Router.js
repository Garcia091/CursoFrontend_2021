import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'


import EditProducto from '../components/EditProducto'
import AppProducto from '../components/AddProducto'
import Navbar from '../components/Navbar'
import ProductoLista from '../components/ProductoLista'
import Productos from '../components/Productos'
import AddProducto from '../components/AddProducto'

const Router = () => {

    const [productos, guardarProductos] = useState([]);
    const [recargarProductos, guardarRecargarProductos] = useState(true);

    useEffect(() => {
        if (recargarProductos) {

            const consultarApi = async () => {
                const res = await axios.get('http://localhost:3004/restaurant');
                const data = res.data
                console.log(data)
                guardarProductos(data);
            }

            consultarApi();
            guardarRecargarProductos(false);
        }
    }, [recargarProductos])


    return (
        <BrowserRouter>
            <Navbar />
            <Switch>

                <Route exact path="/"
                    render={() => (
                        <Productos
                            productos={productos}
                            guardarRecargarProductos={guardarRecargarProductos}
                        />
                    )}
                />
                <Route exact path="/nuevo-producto"
                    render={() => (
                        <AddProducto
                            guardarRecargarProductos={guardarRecargarProductos}
                        />
                    )} />

                <Route exact path="/productos/editar/:id"
                    render={props => {
                        // tomar el ID del producto
                        const idProducto = parseInt(props.match.params.id);

                        // el producto que se pasa al state
                        const producto = productos.filter(producto => producto.id === idProducto);

                        return (
                            <EditProducto
                                producto={producto[0]}
                                guardarRecargarProductos={guardarRecargarProductos}
                            />
                        )
                    }} />

                <Route exact path="/" component={Productos} />

            </Switch>
        </BrowserRouter>
    )
}

export default Router
