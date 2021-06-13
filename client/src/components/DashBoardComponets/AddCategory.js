import React from 'react';
import {useDispatch} from 'react-redux';
import {addCatagory} from '../../redux/Action';

export default function AddCatagory() {

    const [state,setState]=React.useState({
        title:'',
        description:'',
        Image:''
    });
    const dispatch=useDispatch();
    
    return (
        <div className="add-cloth-page">
            <div className="add-cloth">
                <div className="add-cloth-area">
                    <h1>Add Catagory</h1>
                    <div style={{display:"flex",flexDirection:'column'}}>
                        <div className="cloth-input">
                            <input
                            value={state.title}
                            onChange={(e)=>{
                                setState({...state,title:e.target.value})
                            }} 
                            type="text" name="name" placeholder="name"/>
                            <input value={state.description}
                            onChange={(e)=>{
                                setState({...state,description:e.target.value})
                            }} 
                            type="text" name="description" placeholder="description"/>
                            <input
                            onChange={(e)=>{
                                setState({...state,Image:e.target.files[0]});
                            }} 
                            type="file"  name="image" placeholder="image" required="required"/>
                            
                        </div>
                    </div>
                    <button   onClick={()=>{
                        const formData=new FormData();
                        formData.append('image',state.Image);
                        formData.append('title',state.title);
                        formData.append('description',state.description);
                        dispatch(addCatagory(formData));
                        setState({
                            title:'',
                            description:'',
                        })
                    }}>Add</button>
                </div>
            </div>
        </div>
    )
}
