import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../images/PngItem_1302708.png';
import TrashIcon from '@material-ui/icons/Delete';
import Header from './Header';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {ProductQuery} from '../apollo-client/Query';
import VerticalMoreIcon from '@material-ui/icons/MoreHoriz';

export default function SelectedItems() {
    const CartItems=useSelector(state=>state.increaseCartNumber.cart_ids);
    const {data,error,loading}=useQuery(ProductQuery);
    return (
        <div>
            <Header/>
            <div className="cartscreen">
                <div className="cartscreen__left">
                <div className="card-body">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>Image</td>
                                    <td>title</td>
                                    <td>description</td>
                                    <td>price</td>
                                    <td>amount</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {
                            data.product.map(product=>(
                                CartItems.map(item=>(
                                    product._id===item?
                                    <>
                                        <tr>
                                            <td><img src={`http://localhost:5000/${product.imageUrl}`} width="60px" height="100px" alt="image"/></td>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td>{product.selling_price}</td>
                                            <td>
                                                <select className="cartItem__select" value={20} onChange={(e)=>{
                                                // props.qtyChangeHandler(props.item.cartItems[0].product,e.target.value)
                                                }}>
                                                    {console.log(new Range(6))}
                                                    <option>dlkjf</option>
                                                </select>
                                            </td>
                                            
                                        </tr>
                                    </>:null
                                ))
                                ))
                            }  
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>subtotal item</p>
                        <p>2</p>
                    </div>
                    <div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
            
            <div>
            {
                CartItems?null:<p>No item is selected</p>
            }
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
