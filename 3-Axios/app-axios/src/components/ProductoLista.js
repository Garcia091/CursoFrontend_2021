import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const ProductoLista = ({ productos, guardarRecargarProductos }) => {

    const eliminarProducto = id => {
        console.log('eliminando', id);

        // TODO: Eliminar los registros
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "Un Platillo eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancelar'

        }).then(async (result) => {
            if (result.value) {
                try {

                    const url = `http://localhost:3004/restaurant/${id}`;
                    const resultado = await axios.delete(url);
                    if (resultado.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            'El Producto se ha eliminado',
                            'success'
                        )
                        // Consultar la api nuevamente
                        guardarRecargarProductos(true)
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error, vuelve a intentarlo'
                    })
                }
            }
        })
    }



    return (
        <div className="container text-center">
            <table className=" table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => {
                            return (
                                <tr key={producto.id}>
                                    <th scope="row">{producto.id}</th>
                                    <td>{producto.nombrePlatillo}</td>
                                    <td>{producto.precioPlatillo}</td>
                                    <td>{producto.categoria}</td>
                                    <td>

                                        <Link
                                            to={`/productos/editar/${producto.id}`}
                                            className="btn btn-success mr-2"
                                        >Editar </Link>


                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => eliminarProducto(producto.id)}
                                        >
                                            Eliminar &times;
                                        </button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductoLista
