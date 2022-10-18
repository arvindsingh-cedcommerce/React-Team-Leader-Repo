import { add,checked,Delete, Delete2, edit, edit2, unchecked } from "./TodoActions"

export const manageStateToProps = state => {
    return {
        ...state
    }
}

export const manageStateToDispatch = dispatch => {
 return {
    Add:(value)=>dispatch(add(value)),
    delete:(index)=>dispatch(Delete(index)),
    edit:(value,index)=>dispatch(edit(value,index)),
    checked:(index)=>dispatch(checked(index)),
    delete2:(index)=>dispatch(Delete2(index)),
    edit2:(value,index)=>dispatch(edit2(value,index)),
    unchecked:(index)=>dispatch(unchecked(index))
 }
}