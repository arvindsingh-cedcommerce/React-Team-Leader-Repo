import { ADD, CLEAR, DIVIDE, MULTIPLY, SUBTRACT } from "./Types"

export const add = (num1, num2) => {
    return {
        type: ADD,
        payload1: num1,
        payload2: num2
    }
}
export const subtract = (num1, num2) => {
    return {
        type: SUBTRACT,
        payload1: num1,
        payload2: num2
    }
}
export const multiply = (num1, num2) => {
    return {
        type: MULTIPLY,
        payload1: num1,
        payload2: num2
    }
}
export const divide = (num1, num2) => {
    return {
        type: DIVIDE,
        payload1: num1,
        payload2: num2
    }
}
export const clear = () => {
    return {
        type: CLEAR,
        payload1: 0,
        payload2: 0
    }
}