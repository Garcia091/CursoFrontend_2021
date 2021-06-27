import React from 'react'

const Cards = ({personaje}) => {

    return (
        <div className="card text-white bg-dark ms-3 py-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={personaje.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body"> 
                        <h5 className="card-title">nombre: {personaje.name}</h5>
                        <p className="card-text">gender: {personaje.gender}</p>
                        <p className="card-text"><small className="text-muted">{personaje.species}</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards
