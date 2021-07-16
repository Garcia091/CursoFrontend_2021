import React, { useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom';

const AppProducto = (props) => {
    const { history, producto, guardarRecargarProductos } = props;

    const [data, setData] = useState({
        nombrePlatillo: '',
        precioPlatillo: '',
        categoria: ''
    });

    // generar los refs
    const precioPlatilloRef = useRef('');
    const nombrePlatilloRef = useRef('');

    const [error, guardarError] = useState(false);
    const { nombrePlatillo, precioPlatillo, categoria, id } = data

    const handleInputChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const editarProducto = async e => {
        e.preventDefault();

        // validacion
        const nuevoNombrePlatillo = nombrePlatilloRef.current.value,
            nuevoPrecioPlatillo = precioPlatilloRef.current.value;

        if (nuevoNombrePlatillo === '' || nuevoPrecioPlatillo === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        // Revisar si cambio la categoria de lo contrario asignar el mismo valor
        let categoriaPlatillo = (categoria === '') ? producto.categoria : categoria;

        console.log(categoriaPlatillo);

        // Obtener los valores del formulario
        const editarPlatillo = {
            precioPlatillo: nuevoPrecioPlatillo,
            nombrePlatillo: nuevoNombrePlatillo,
            categoria: categoriaPlatillo
        }

        // Enviar el Request
        const url = `http://localhost:3004/restaurant/${producto.id}`;
        try {
            const resultado = await axios.put(url, editarPlatillo);

            if (resultado.status === 200) {
                Swal.fire(
                    'Producto Editado',
                    'El producto se editó correctamente',
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

        // redirigir al usuario, consultar api
        guardarRecargarProductos(true);
        history.push('/');

    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar Producto</h1>

            <form
                className="mt-5"
                onSubmit={editarProducto}
            >
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombrePlatillo"
                        placeholder="Nombre Platillo"
                        ref={nombrePlatilloRef}
                        defaultValue={producto.nombrePlatillo}

                    />
                </div>

                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precioPlatillo"
                        placeholder="Precio Platillo"
                        ref={precioPlatilloRef}
                        defaultValue={producto.precioPlatillo}
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
                            defaultChecked={(producto.categoria === 'postre')}
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
                            defaultChecked={(producto.categoria === 'bebida')}
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
                            defaultChecked={(producto.categoria === 'plato fuerte')}

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
                            defaultChecked={(producto.categoria === 'ensalada')}
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
                            defaultChecked={(producto.categoria === 'sopa')}

                        />
                        <label className="form-check-label">
                            Sopa
                        </label>
                    </div>
                </div>
                

                <div class="d-grid gap-2 col-6 mx-auto">
                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
                </div>

               
            </form>
        </div>
    )
}

export default withRouter(AppProducto)
