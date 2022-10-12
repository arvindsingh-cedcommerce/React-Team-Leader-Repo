import { buyCake, buyChocolate, buyIceCream } from "./Actions"

export const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export const mapStateToDispatch = (dispatch) => {
  return {
    buyCake: (value) => dispatch(buyCake(value)),
    buyIceCream: (value) => dispatch(buyIceCream(value)),
    buyChocolate: (value) =>  dispatch(buyChocolate(value)) 
  }
}

