import {types} from '../type/types'

export  const AgregarCitas = (cita) => {
    return {
        type: types.agregar,
        payload: cita
    }
}

export  const BorrarActionCita = (id) => {
    return {
        type:types.borrar,
        payload: id
    }
}