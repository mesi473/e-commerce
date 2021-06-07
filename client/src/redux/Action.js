import * as Constant from './constants';

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
export const addItem=()=>async (dispatch)=>{
    try{
        dispatch({
            type:Constant.ADD_ITEM
        })
    }catch(error){
        console.log(error)
    }
}