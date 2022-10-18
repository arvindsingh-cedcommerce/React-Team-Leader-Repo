import { createStore } from "redux";
import { TodoReducer } from "./TodoReducers";

export const store = createStore(TodoReducer)