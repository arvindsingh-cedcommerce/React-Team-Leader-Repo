import { USERNAME } from "./ProfileTypes"

export const initialState = {
    User_Name: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME:
           return {
            ...state,
            User_Name:action.payload
           }
        default:
            return state
    }
}

export default profileReducer;