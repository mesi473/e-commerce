import React from 'react';
import TrashIcon from '@material-ui/icons/Delete';
import Header from './Header';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {ProductQuery} from '../apollo-client/Query';
import {decreaseCartNumber,changeQTY,clearCart} from '../redux/Action';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


export default function SelectedItems() {
    const CartItems=useSelector(state=>state.increaseCartNumber.cart_ids);
    const {data,error,loading}=useQuery(ProductQuery);
    const dispatch=useDispatch();
    const [state,setState]=React.useState({
        total:[],
    })
    function total(){
        let total=0;
        data.product.map(product=>{
            CartItems.map((item,index)=>{
                if(product._id===item.item_id){
                    total=total+CartItems[index].qty*product.selling_price
                }
            })
        })
        return total;
    }
    
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
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            data.product.map(product=>(
                                CartItems.map((item,index)=>(
                                    product._id===item.item_id?
                                        <tr key={index}>
                                            <td><img src={`http://localhost:5000/${product.imageUrl}`} width="60px" height="100px" alt="image"/></td>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td>{product.selling_price}</td>
                                            <td>
                                                <select className="cartItem__select" 
                                                value={CartItems[index].qty} 
                                                onChange={(e)=>{
                                                    let array=[]
                                                    for(let i=0;i<CartItems.length;i++){
                                                        if(CartItems[i].item_id===product._id){
                                                            array.push({item_id:product._id,qty:e.target.value});
                                                        }
                                                        else array.push({item_id:CartItems[i].item_id,qty:CartItems[i].qty});
                                                    }
                                                    dispatch(changeQTY(array))
                                                }}>
                                                    {productCountStock(product.amount)}
                                                </select>   
                                            </td>
                                            <td onClick={()=>{
                                                dispatch(decreaseCartNumber(product._id))
                                            }}><TrashIcon color="secondary" /></td>
                                        </tr>
                                   :null
                                ))
                                ))
                            }  
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>tsega E-shope</p>
                        <hr></hr>
                        {
                            data.product.map(product=>(
                                CartItems.map((item,index)=>(
                                    product._id===item.item_id?
                                    <div className="product-price" key={index}>
                                        <span >{product.title} </span>
                                        <span>
                                            &nbsp; {product.selling_price} * {CartItems[index].qty} &nbsp;={product.selling_price*CartItems[index].qty}
                                        </span>
                                    </div>:null
                                ))
                                ))
                        }
                        <div className="total-area">
                            <div className="total-calc-area">
                                <span>Sub Total</span>
                                <span>{total()}</span>
                            </div>
                            <div className="total-calc-area">
                                <span>VAT 15%</span>
                                <span>{total()*0.15}</span>
                            </div>
                            <div className="total-calc-area">
                                <span>Total</span>
                                <span>{total()+total()*0.15}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        flex:1,
                        justifyContent:"space-between",
                        flexDirection:"row"
                    }}>
                        <Link style={{background:"#fc0367"}} className="clearbutton"
                        onClick={()=>{
                            dispatch(clearCart());
                        }}
                        >clear</Link>
                        <Link to="/buy" style={{background:"#03fc31"}} className="clearbutton">buy</Link>
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
