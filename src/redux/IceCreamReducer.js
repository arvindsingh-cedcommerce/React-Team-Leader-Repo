import { BUY_ICECREAM } from "./Types"

const initailState = {
  no_of_iceCream: 400
}
//Reducer for Ice-Cream
export const iceCreamReducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      if (action.quantity > state.no_of_iceCream) {
        alert(`Don't have enough Ice-Creams to buy`)
      }
      else {
        return {
          ...state,
          no_of_iceCream: state.no_of_iceCream - action.quantity
        }
      }
      break;
    default:
      return { ...state }
  }
}