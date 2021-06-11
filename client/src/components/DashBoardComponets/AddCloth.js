import React from 'react';
import {useMutation} from '@apollo/client';
import {addProductProperty} from '../../apollo-client/Mutation';
import {useDropzone} from 'react-dropzone'

export default function AddCloth() {

    const [state,setState]=React.useState({
        title:'',
        amount:0,
        price:0,
        description:'',
        rating:0,
        Image:''
    });
    const [add_Product]=useMutation(addProductProperty);
    const onDrop = React.useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
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
                            type="text" name="title" placeholder="title"/>
                            <input value={state.amount}
                            onChange={(e)=>{
                                setState({...state,amount:e.target.value})
                            }} 
                            type="number" name="number" placeholder="amount" required="required"/>
                            <input value={state.price}
                            onChange={(e)=>{
                                setState({...state,price:e.target.value})
                            }} 
                            type="number" name="price" placeholder="price"/>
                        </div>
                        <div className="cloth-input">
                            <input value={state.rating}
                            onChange={(e)=>{
                                setState({...state,rating:e.target.value})
                            }} 
                            type="number" name="rating" placeholder="rating" required="required"/>
                            <input value={state.description}
                            onChange={(e)=>{
                                setState({...state,description:e.target.value})
                            }} 
                            type="text" name="description" placeholder="description"/>
                            <input
                            onChange={(e)=>{
                                setState({...state,Image:e.target.files[0]});
                            }} 
                            type="file" name="image" placeholder="image" required="required"/>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                }
                            </div>
                        </div>
                    </div>
                    <button   onClick={()=>{
                        console.log(state.Image);
                        add_Product({
                            variables:{
                                title:state.title,
                                Image:state.Image,
                                description:state.description,
                                price:state.price,
                                rating:state.rating,
                                amount:state.amount,
                            },
                            errorPolicy:"all",
                            // refetchQueries:[{query:}]
                        })
                    }}>Add</button>
                </div>
            </div>
        </div>
    )
}
