import { combineReducers, createStore } from "redux";
import { AddReducer, ClearReducer, DivideReducer, MultiplyReducer, SubtractReducer } from "./Reducers";

const reducer = combineReducers({
    addResult:AddReducer,
    subResult:SubtractReducer,
    multiResult:MultiplyReducer,
    divideResult:DivideReducer,
    clearResult:ClearReducer
})

export const store = createStore(reducer)