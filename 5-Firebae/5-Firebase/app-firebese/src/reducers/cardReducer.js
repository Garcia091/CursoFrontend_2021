import { types } from "../types/types";

const initialState = {
    card: [],
    active: null
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cardAddNew:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }

        case types.cardActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.cardLoad:
            return {
                ...state,
                card: [...action.payload]
            }

        case types.cardUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                card: state.card.map(
                    card => card.id === action.payload.id
                        ? action.payload.card
                        : card
                )
            }
            case types.cardLogoutClean:
                return {
                    ...state,
                    active: null
                 }
        default:
            return state;
    }
}
