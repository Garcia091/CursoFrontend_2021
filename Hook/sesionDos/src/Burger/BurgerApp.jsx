import React, { useEffect, useState } from 'react'
import Burger from './components/Burger'
import Carrito from './components/Carrito'

const BuergerApp = () => {
    const [burgers, setBurgers] = useState([])
    const [carrito, setCarrito] = useState([])

    const burgerInfo = async () => {
        const url = 'http://localhost:3004/Burger'
        const resp = await fetch(url)
        const data = await resp.json()
        setBurgers(data)
    }

    useEffect(() => {
        burgerInfo()
    }, [])


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><h2>Burger</h2></a>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex">
                        <li>
                            <a href="/" className="nav-link text-secondary" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi d-block mx-auto" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#carrito">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi d-block mx-auto" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                <span className="badge gb-danger">{carrito.length}</span>
                            </button>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="container row row-cols-1 row-cols-md-6 g-4 py-5 text-center">
                {
                    burgers.map(burger => (
                        <Burger
                            key={burger.id}
                            burgers={burgers}
                            burger={burger}
                            carrito={carrito}
                            setCarrito={setCarrito}
                        />
                    ))
                }
            </div>






            <div className="modal" id="carrito" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Carrito de compras</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Carrito
                                carrito={carrito}
                                setCarrito={setCarrito}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuergerApp
