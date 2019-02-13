import {actionTypes} from '../constant/constant'


export function getData(){
}

export function add(todo){
    return (dispatch) =>{ 
        dispatch({type:actionTypes.ADD,payload:todo})

    }
}
export function update(obj){
    return (dispatch) =>{
        dispatch({type:actionTypes.UPDATE,payload:obj})

    } 
}

export function deleteOne(ind){
    return (dispatch) =>{
        dispatch({type:actionTypes.DELETE,payload:ind})

    } 
}

export function deleteAll(){
    return (dispatch) =>{
        dispatch({type:actionTypes.DELETEALL})

    } 
}
