import { add,subtract,multiply,divide } from './Actions';

export const mapStateToProps = state =>{
    return {
        ...state
    }
}

export const mapStateToDispatch = dispatch => {
    return {
        add:(e1,e2)=>dispatch(add(e1,e2)),
        subtract:(e1,e2)=>dispatch(subtract(e1,e2)),
        multiply:(e1,e2)=>dispatch(multiply(e1,e2)),
        divide:(e1,e2)=>dispatch(divide(e1,e2)),
    }
}