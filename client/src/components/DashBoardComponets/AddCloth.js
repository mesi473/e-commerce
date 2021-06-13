import React from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/Action';
import {CatagoryQuery} from '../../apollo-client/Query';
import {useQuery} from '@apollo/client';

export default function AddCloth() {

    const [state,setState]=React.useState({
        title:'',
        amount:'',
        selling_price:'',
        bought_price:'',
        description:'',
        rating:'',
        Image:'',
        catagory:'For Male'
    });
    const dispatch=useDispatch();
    const {data,error,loading}=useQuery(CatagoryQuery);
    return (
        <div className="add-cloth-page">
            <div className="add-cloth">
                <div className="add-cloth-area">
                    <h1>Add New Cloth</h1>
                    <div style={{display:"flex",flexDirection:'column'}}>
                        <div className="cloth-input">
                            <input
                                value={state.title}
                                onChange={(e)=>{
                                    setState({...state,title:e.target.value})
                                }} 
                                type="text" name="title" placeholder="title"
                            />
                            <input 
                                value={state.amount}
                                onChange={(e)=>{
                                    setState({...state,amount:e.target.value})
                                }} 
                                type="number" name="number" placeholder="amount" required="required"
                            />
                            <input 
                                value={state.selling_price}
                                onChange={(e)=>{
                                    setState({...state,selling_price:e.target.value})
                                }} 
                                type="number" name="selling price" placeholder="selling price"
                            />
                             <input 
                                value={state.bought_price}
                                onChange={(e)=>{
                                    setState({...state,bought_price:e.target.value})
                                }} 
                                type="number" name="bought price" placeholder="bought price" required="required"
                            />
                            
                        </div>
                        <div className="cloth-input">
                           <input 
                                value={state.rating}
                                onChange={(e)=>{
                                    setState({...state,rating:e.target.value})
                                }} 
                                type="number" name="rating" placeholder="rating" required="required"
                            />
                            
                            <input 
                                value={state.description}
                                onChange={(e)=>{
                                    setState({...state,description:e.target.value})
                                }} 
                                type="text" name="description" placeholder="description"
                            />
                            {
                                error?<p>{error}</p>:loading?<p>loading ....</p>:
                                <select value={state.catagory}
                                onChange={(e)=>{
                                    setState({...state,catagory:e.target.value})
                                }}
                                >
                                    <option  disabled>Catagory</option>
                                    {
                                        data.catagory.map((catagory,index)=>(
                                            <option value={catagory.title} key={index}>{catagory.title}</option>
                                        ))
                                    }
                                </select>
                            }
                            <input
                                onChange={(e)=>{
                                    setState({...state,Image:e.target.files[0]});
                                }} 
                                type="file" name="image" placeholder="image" required="required"
                            />
                            
                        </div>
                    </div>
                    <button   onClick={()=>{
                        const formData=new FormData();
                        formData.append('image',state.Image);
                        formData.append('title',state.title);
                        formData.append('description',state.description);
                        formData.append('rating',state.rating);
                        formData.append('amount',state.amount);
                        formData.append('bought_price',state.bought_price);
                        formData.append('selling_price',state.selling_price)
                        formData.append('catagory',state.catagory)
                        dispatch(addItem(formData));
                        setState({
                            title:'',
                            amount:'',
                            selling_price:'',
                            bought_price:'',
                            description:'',
                            rating:'',
                            catagory:'For Male'
                        })
                    }}>Add</button>
                </div>
            </div>
        </div>
    )
}
