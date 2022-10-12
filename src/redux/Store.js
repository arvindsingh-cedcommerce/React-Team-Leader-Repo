import { createStore, combineReducers } from "redux";
import { cakeReducer } from "./CakeReducer";
import { chocolateReducer } from "./ChocolateReducer";
import { iceCreamReducer } from "./IceCreamReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    chocolate:chocolateReducer
})

export const store = createStore(rootReducer)