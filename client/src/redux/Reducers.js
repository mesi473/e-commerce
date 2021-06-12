import * as Constant from './constants';

let initialState={
    cart:{
        status:false,
        cartItem:[],
        error:[]
    },
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
export const addItem=(state=initialState,action)=>{
    switch(action.type){
        case Constant.ADD_ITEM:
            return{
                ...state,
                cart:action.payload
            }
        default:
            return {
                ...state
            }
    }
}