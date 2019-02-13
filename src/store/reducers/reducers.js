import {actionTypes} from '../constant/constant';

const initialState={
    todos:[],
    editing:false
}

export default (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD:{
            return{
                ...state,
                todos:state.todos.concat(action.payload),   
            }
        }
        case actionTypes.DELETE:{
            let newTodos= [...state.todos];
            newTodos.splice(action.payload,1)
            return { 
                ...state,
                todos:newTodos,
            }
        }
        case actionTypes.DELETEALL:{
            let newTodos= [...state.todos];
            newTodos.splice(0)
            return { 
                ...state,
                todos:newTodos,
            }
        }
        case actionTypes.UPDATE:{
            let newTodos= [...state.todos];
            let todo= action.payload.val;
            let ind = action.payload.ind
            newTodos.splice(ind,1,todo)
            return {
                ...state,
                todos:newTodos,
            }
        }
     
        default: return state;
    }
}