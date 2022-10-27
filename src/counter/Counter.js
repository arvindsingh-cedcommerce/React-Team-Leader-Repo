import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>Counter
      <button onClick={()=>dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter