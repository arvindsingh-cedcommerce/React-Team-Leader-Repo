import { CUSTOMER_NAME, PASSWORD, USERNAME } from "./LoginTypes"

export const initialState = {
  customerName: '',
  username: '',
  password: ''
}

const LoginReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case CUSTOMER_NAME:
      return {
        ...state,
        customerName: action.payload
      }
    case USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case PASSWORD: return {
      ...state,
      password: action.payload
    }
    default:
      return state
  }
}

export default LoginReducer