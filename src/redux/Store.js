import { createStore } from "redux";
import LoginReducer from "./login/LoginReducer";

const store = createStore(LoginReducer)

export default store