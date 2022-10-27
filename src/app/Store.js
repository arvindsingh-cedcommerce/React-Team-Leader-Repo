import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counter/CounterSlice";
import gameSlice from "../game/GameSlice";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        game: gameSlice
    },
})