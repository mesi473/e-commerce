import * as Constant from './constants';

let initialState={
    item:{
        status:false,
        items:[],
        error:[]
    },
    catagory:{
        status:false,
        catagories:[],
        error:[]
    }
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
                item:action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export const addCatagory=(state=initialState,action)=>{
    switch(action.type){
        case Constant.ADD_CATAGORY:
            return{
                ...state,
                catagory:action.payload
            }
        default:
            return {
                ...state
            }
    }
}