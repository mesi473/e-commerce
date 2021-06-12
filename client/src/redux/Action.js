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
    console.log(item);
    try{
        const {data}=await axios.post(`http://localhost:5000/additem`,item)
        console.log(data);
        dispatch({
            type:Constant.ADD_ITEM,
            playload:data
        })
    }catch(error){
        console.log(error)
    }
}