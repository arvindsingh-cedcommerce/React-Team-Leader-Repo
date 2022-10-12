import { BUY_CHOCOLATE } from "./Types"

const initailState = {
  no_of_chocolate: 200
}
//Reducer for Chocolates
export const chocolateReducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      if (action.quantity > state.no_of_chocolate) {
        alert(`Don't have enough Chocolates to buy`)
      }
      else {
        return {
          ...state,
          no_of_chocolate: state.no_of_chocolate - action.quantity
        }
      }
      break;
    default:
      return { ...state }
  }
}