import React from 'react'

export default function AddCloth() {

    const [state,setState]=React.useState({
        title:'',
        amount:'',
        price:'',
        description:'',
        rating:'',
        Image:''
    })
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
                                const formData=new FormData();
                                formData.append('Image',state.Image);
                                formData.append('title',state.title)
                                formData.append("description",state.description)
                                formData.append("price",state.price)
                                formData.append("rating",state.rating)
                                formData.append("amount",state.amount)
                            }} 
                            type="file" name="image" placeholder="image" required="required"/>
                            
                        </div>
                    </div>
                    <button   onClick={()=>{
                        
                    }}>Login</button>
                </div>
            </div>
        </div>
    )
}
