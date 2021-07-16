import { types } from '../type/types'

const initialState = {
    citas: []
}

export default function CitasReducer(state = initialState, action) {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }

        case types.borrar:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }

        default:
            return state;
    }

}
