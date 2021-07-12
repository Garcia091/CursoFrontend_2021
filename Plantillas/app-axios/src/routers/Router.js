import React from 'react'
import {
    BrowserRouter, 
    Route,
    Switch
    }from 'react-router-dom'
import EditProducto from '../components/EditProducto'

import AppProducto from '../components/AddProducto'
import Navbar from '../components/Navbar'
import ProductoLista from '../components/ProductoLista'

const Router = () => {
    return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={ProductoLista} />
            <Route exact path="/nuevo-producto" component={AppProducto} />
            <Route exact path="/editar-producto" component={EditProducto} />
        </Switch>
    </BrowserRouter>
    )
}

export default Router
