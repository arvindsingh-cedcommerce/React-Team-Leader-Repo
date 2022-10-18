import { ADD, COMPLETED, DELETE, DELETE2, EDIT, EDIT2, INCOMPLETE } from "./TodoTypes"


export const add = (data) => {
  console.log(data);
  return {
    type: ADD,
    payload: data
  }
}

export const Delete = (index) => {
  console.log(index);
  return {
    type: DELETE,
    payload: index
  }
}
export const edit = (value,index) => {
  return {
    type:EDIT,
    payload1:value,
    payload2:index
  }
}
export const checked = (index) => {
  console.log(index);
  return {
    type: COMPLETED,
    payload: index
  }
}

export const Delete2 = (index) => {
  return {
    type:DELETE2,
    payload:index
  }
}
export const edit2 = (value,index) => {
  return {
    type:EDIT2,
    payload1:value,
    payload2:index
  }
}
export const unchecked = (index) => {
  return {
    type:INCOMPLETE,
    payload:index
  }
}