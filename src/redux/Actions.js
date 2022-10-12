import { BUY_CAKE, BUY_CHOCOLATE, BUY_ICECREAM } from "./Types";

export const buyCake = (quantity) => {
    return {
        type: BUY_CAKE,
        quantity:quantity
    }
}
export const buyIceCream = (quantity) => {
    return {
        type: BUY_ICECREAM,
        quantity:quantity
    }
}

export const buyChocolate = (quantity) => {
    return {
        type: BUY_CHOCOLATE,
        quantity:quantity
    }
}