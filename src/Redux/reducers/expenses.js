import {ADD_EXPENSE} from "../action-types/expenses";

const initialState = {
    expenselist : [],
}

export const expenseReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_EXPENSE:{
            return {
                ...state ,
                expenselist:[...state.expenselist , action.data],
            }
        }
        default:
            return state;

    }
}