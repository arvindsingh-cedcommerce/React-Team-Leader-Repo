import React from 'react'
import {connect} from 'react-redux'
import {FetchData,FetchUser,FetchSuccess } from '../redux/asyncActions'

function Container(props) {
  return (
    <div>
      <button onClick={props.FetchData}>Fetch Data</button>
      {props.data && 
      props.data.map((data,index)=>(
        <h1>{data.name}</h1>
      ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    // FetchUser:()=>dispatch(FetchUser()),
    FetchData:()=>dispatch(FetchData())
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(Container)