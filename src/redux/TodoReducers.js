import { ADD, COMPLETED, DELETE, DELETE2, EDIT, EDIT2, INCOMPLETE } from "./TodoTypes"


const initialState = {
  todo_list: [1, 2, 3, 4],
  completed_list: []
}

export const TodoReducer = (state = initialState, action) => {
  console.log(action.payload2)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todo_list: [...state.todo_list, action.payload]
      }
    case DELETE:
      let temp = [...state.todo_list]
      temp.splice(action.payload, 1)
      return {
        ...state,
        todo_list: temp
      }
    case EDIT:
      let temp2 = [...state.todo_list]
      temp2[action.payload2] = action.payload1
      return {
        ...state,
        todo_list: temp2
      }
    case COMPLETED:
      return {
        ...state,
        completed_list: [...state.completed_list, state.todo_list[action.payload]]
      }
    case DELETE2:
      let temp3 = [...state.completed_list]
      temp3.splice(action.payload, 1)
      return {
        ...state,
        completed_list: temp3
      }
    case EDIT2:
      let temp4 = [...state.completed_list]
      temp4[action.payload2] = action.payload1
      return {
        ...state,
        completed_list: temp4
      }
      case INCOMPLETE:
        return {
          ...state,
          todo_list: [...state.todo_list, state.completed_list[action.payload]]
        }
    default:
      return {
        ...state
      }
  }
}
