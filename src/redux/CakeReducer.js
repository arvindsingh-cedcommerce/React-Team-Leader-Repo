import { BUY_CAKE } from "./Types"

const initailState = {
  no_of_cakes: 100
}
//Reducer for Cakes
export const cakeReducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (action.quantity > state.no_of_cakes) {
        alert(`Don't have enough Cakes to buy`)
      }
      else {
        return {
          ...state,
          no_of_cakes: state.no_of_cakes - action.quantity
        }
      }
      break;
    default:
      return { ...state }
  }
}