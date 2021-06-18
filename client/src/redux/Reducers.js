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
    },
    numberOfItemInTheCart:0,
    cart_ids:[]
    
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
export const increaseCartNumber=(state=initialState,action)=>{
    switch(action.type){
        case Constant.INCREASE_CART_NUMBER:
            return{
                ...state,
                numberOfItemInTheCart:state.numberOfItemInTheCart+1,
                cart_ids:state.cart_ids.concat(action.payload)
            }
        case Constant.DECREASE_CART_NUMBER:
            return{
                ...state,
                numberOfItemInTheCart:state.numberOfItemInTheCart-1,
                cart_ids:state.cart_ids.filter((x)=> x.item_id !== action.payload)
            }
        case Constant.CHANGE_QTY:
            return{
                ...state,
                cart_ids:action.payload
            }
        case Constant.CLEAR_CART:
            return{
                ...state,
                cart_ids:[],
                numberOfItemInTheCart:0
            }
        default:
            return {
                ...state
            }
    }
}