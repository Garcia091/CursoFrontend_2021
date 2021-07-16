import React from 'react'
import AgregarCita from '../components/AgregarCita'
import ListarCita from '../components/ListarCita'
import Store from '../store/Store'
import { Provider } from 'react-redux'


const AgendaApp = () => {
    return (
        <Provider store={Store}>
            <div className="container text-center">
                <header><h1>EPS Sura</h1></header>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <AgregarCita />
                    </div>
                    <div className="col-md-6">
                        <ListarCita />
                    </div>
                </div>
            </div>
        </Provider>

    )
}

export default AgendaApp
