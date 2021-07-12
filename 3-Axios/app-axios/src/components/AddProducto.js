import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom';

const AddProducto = ({history,guardarRecargarProductos}) => {

    const [ data, setData ] = useState({
        nombrePlatillo:'',
        precioPlatillo:'',
        categoria:''
    });

    const [ error, guardarError ] = useState(false);
    const {nombrePlatillo,precioPlatillo,categoria, id} = data 

    const handleInputChange=({target})=>{
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const agregarProducto = async e => {
        e.preventDefault();

        if(nombrePlatillo ==='' || precioPlatillo === '' || categoria === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        try {
               const resultado = await axios.post('http://localhost:3004/restaurant', {
                nombrePlatillo, 
                precioPlatillo,
                categoria
            });

            if(resultado.status === 201) {
                Swal.fire(
                    'Producto Creado',
                    'El producto se creo correctamente',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }

        // Redirigir al usuario a productos
        guardarRecargarProductos(true);
        history.push('/');

    }
    return (
        <div className="col-md-8 mx-auto">
            <h1 className="text-center">Agregar Producto</h1>
            <form
                className="mt-5"
                onSubmit={agregarProducto}
            >
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombrePlatillo"
                        placeholder="Nombre Platillo"
                        onChange={handleInputChange}
                        value={nombrePlatillo}
                    
                    />
                </div>

                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precioPlatillo"
                        placeholder="Precio Platillo"
                        onChange={handleInputChange}
                        value={precioPlatillo}
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="postre"
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                            Postre
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="bebida"
                            onChange={handleInputChange}
                          

                        />
                        <label className="form-check-label">
                            Bebida
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="plato fuerte"
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label">
                            Plato fuerte
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="ensalada"
                            onChange={handleInputChange}
                        

                        />
                        <label className="form-check-label">
                            Ensalada
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="sopa"
                            onChange={handleInputChange}
                        

                        />
                        <label className="form-check-label">
                            Sopa
                        </label>
                    </div>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
                </div>
            </form>
        </div>
    )
}

export default withRouter(AddProducto);