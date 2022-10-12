import { createStore } from "redux";
import profileReducer from "./profile/ProfileReducers";

const store = createStore(profileReducer)

export default store;