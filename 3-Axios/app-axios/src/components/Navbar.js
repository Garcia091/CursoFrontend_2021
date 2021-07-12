import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to="/">
                        <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1622495473/ncmfdru8urbqfxwyqkfc.png"
                         alt="" width="50px"/>
                         Guajalotas
                    </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Productos</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/nuevo-producto">Nuevo Producto</NavLink>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
