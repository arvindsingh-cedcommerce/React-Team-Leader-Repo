import { FETCH, FETCHED_SECCESS } from "./Types"

const initialState = {
    loading: false,
    data: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                loading: true
            }
        case FETCHED_SECCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}