import React from 'react'

const Encabezado = () => {
    console.log('render Encabezado')
    return (
        <div className="conteniner text-center">
            <h1>Contenedores</h1>
        </div>
    )
}

export default React.memo(Encabezado)
