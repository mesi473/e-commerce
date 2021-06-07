import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../images/PngItem_1302708.png';
import TrashIcon from '@material-ui/icons/Delete';
import Header from './Header';

export default function SelectedItems() {
    return (
        <div>
            <Header/>
            <div className="cartItem">
                <div className="cartItem__image">
                    <img src={Image} width="40px" height="40px" alt="image"/>
                </div>
                <Link to={`/product/product`} className="cartItem__name">
                    <p>name</p>
                </Link>
                <p className="cartItem__price">$5000</p>
                
                <select className="cartItem__select" value={20} onChange={(e)=>{
                    // props.qtyChangeHandler(props.item.cartItems[0].product,e.target.value)
                }}>
                    {productCountStock(5)}
                </select>
                <div className="cartItem__deleteBtn">
                    <button onClick={()=>{
                        // props.removeHandler(props.item.cartItems[0].product)
                    }}><TrashIcon color="secondary"/></button>
                </div>
            </div>
        </div>
    )
}
function productCountStock(number){
    let array=[]
    for(let i=0;i<number;i++){
        array.push(i);
    }
    return(
        array.map((i)=>(
            <option key={i+1} value={i+1}>{i+1}</option>
        ))
    )
}
