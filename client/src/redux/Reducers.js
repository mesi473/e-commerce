import * as Constant from './constants';

let initialState={
    cart:[],

}

export const Login=(state=initialState,action)=>{
    switch(action.type){
        case Constant.LOGIN:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }

}