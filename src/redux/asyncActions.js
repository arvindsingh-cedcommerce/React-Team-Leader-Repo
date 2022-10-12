// import { createStore } from 'redux'

import { FETCH, FETCHED_SECCESS } from "./Types";


export const FetchData = () => {
  console.log("runn");
  return (dispatch) => {
    dispatch(FetchUser)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        dispatch(FetchSuccess(response))
      })
      .catch((err)=>{
        alert(err.message)
      })
  }
}

export const FetchUser = () => {
  return {
    type: FETCH
  }
}
export const FetchSuccess = (data) => {
  return {
    type: FETCHED_SECCESS,
    payload: data
  }
}
