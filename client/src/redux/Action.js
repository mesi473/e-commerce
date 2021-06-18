import * as Constant from './constants';
import axios from 'axios';

export const Login=()=>async (dispatch)=>{
    try{
        let data=null;
        // await axios.get(`http://localhost:5000/login/${userData.userName}/${userData.password}/${userData.type}`).then((value) => {
        //     data = value;
        // })
        dispatch({
            type:Constant.LOGIN,
            payload:data.data,
        })

    }
    catch(error){
        console.log(error);
    }
}
export const addItem=(item)=>async (dispatch)=>{
    try{
        const {data}=await axios.post(`http://localhost:5000/additem`,item)
        dispatch({
            type:Constant.ADD_ITEM,
            playload:data
        })
    }catch(error){
        console.log(error)
    }
}
export const addCatagory=(item)=>async (dispatch)=>{
    try{
        const {data}=await axios.post(`http://localhost:5000/addcatagory`,item)
        dispatch({
            type:Constant.ADD_CATAGORY,
            playload:data
        })
    }catch(error){
        console.log(error)
    }
}
export const increaseCartNumber=(item_id,qty)=>async (dispatch)=>{
    try{
        dispatch({
            type:Constant.INCREASE_CART_NUMBER,
            payload:{item_id,qty}
        })
    }catch(error){
        console.log(error)
    }
}
export const decreaseCartNumber=(item_id)=>async (dispatch)=>{
    try{
        dispatch({
            type:Constant.DECREASE_CART_NUMBER,
            payload:item_id
        })
    }catch(error){
        console.log(error)
    }
}
export const changeQTY=(item)=>async (dispatch)=>{
    try{
        dispatch({
            type:Constant.CHANGE_QTY,
            payload:item
        })
    }catch(error){
        console.log(error)
    }
}
export const clearCart=()=>async (dispatch)=>{
    try{
        dispatch({
            type:Constant.CLEAR_CART,
        })
    }catch(error){
        console.log(error)
    }
}