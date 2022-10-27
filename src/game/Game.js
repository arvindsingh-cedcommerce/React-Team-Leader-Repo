import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './game.css'
import { flip, flipBack, won_Game } from './GameSlice'

function Game() {
  const count = useSelector((state) => state.game.count)
  const arr1 = useSelector((state) => state.game.array1)
  const arr2 = useSelector((state) => state.game.array2)
  const dispatch = useDispatch()
  console.log(arr1)
  // let flag = false;
  const Flip = (index) => {
    // alert(index)
    dispatch(flip(index))
    setTimeout(() => { dispatch(flipBack()) }, 2000)
    setTimeout(() => { dispatch(won_Game()) }, 2100)
  }
  console.log(typeof (arr1))
  return (
    <div className='parent-div'>
      {arr1.length ?
        <>
          {arr1.map((item, index) => {
            if (item === '') {
              return <img src='https://globalsymbols.com/uploads/production/image/imagefile/6398/14_6398_cc6d4f15-6bc8-4406-a32c-90de28fbec41.svg' alt='img' className='array1' />
            }
            else {
              return <img src={item} alt='img' className='array1'
                onClick={() => Flip(index)} />
            }
          })}
        </> :
        <div style={{paddingTop:'30%'}}>
          <h1 className='animate__animated animate__zoomInDown'>Steps: {parseInt(count/2)}</h1>
          <h1 className='animate__animated animate__zoomInUp'>
            Congratulations! &nbsp;You won the game</h1>
        </div>
      }
    </div>
  )
}

export default Game