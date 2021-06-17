import React from 'react';
import Image9 from '../images/PngItem_2841643.png';
import Image10 from '../images/PngItem_448629.png'
import ProductCatagory from './ProductWithCatagory';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {Button,makeStyles} from '@material-ui/core';
import {ProductQuery} from '../apollo-client/Query';
import {useQuery} from '@apollo/client';
import {useDispatch} from 'react-redux';
import {increaseCartNumber} from '../redux/Action'

const useStyles=makeStyles({
    addCartBtn:{
        borderRadius:"20px"
    },
    shopNow:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        borderRadius:"30px"
    }
})
export default function Products() {
    const rate=[1,2,3,4,5];
    const classes=useStyles();
    const {data,error,loading}=useQuery(ProductQuery);
    const [cartbtn,setCartbtn]=React.useState(false);
    let [cartimage,setCartimage]=React.useState('')
    const dispatch=useDispatch();
    
    function onClickHandler(id,title){
        let img=document.getElementsByName(id);
        img[0].classList.toggle('zoom');
        // setTimeout(function(){
        //     img[0].classList.remove('zoom');
        // },500);
        let h3=document.getElementsByName(title);
        h3[0].classList.toggle('message2')
        dispatch(increaseCartNumber(id));
    }
    return (
        <div>
            <div className="description1" style={{marginTop:"300px"}}>
                <img src={Image9} alt=""/>
                <div>
                    <h1>Find The Best Product from Our Shop</h1>
                    <h4>"How to dress? When the money is going from you wear anything you like. When the money is coming to you, dress your best."<span>Traditional Proverb</span></h4>
                    <Button className={classes.shopNow} variant="contained" color="primary">Shop Now</Button>
                </div>
                <img src={Image10} alt="" width="40px" height="40px"/>
            </div>
            <div className="section-name">
                <h3 className="section-title">Latest Products</h3>
                <div className="product-type">
                    <span className="type">New</span>
                    <span className="type">Cultural</span>
                    <span className="type">Discount</span>
                    <span className="type">Hand crafted</span>
                </div>  
            </div>
            <div className="products">
                <div className="products-item-section">
                    {
                        error?<p>{error.message}</p>:loading?<p>loading ...</p>:
                        data.product.map(product=>(
                            <div className="product-item" key={product._id}>
                                <img name={product._id}   src={`http://localhost:5000/${product.imageUrl}`} alt=""/>
                                <h3 name={product.title}>you already add it.</h3>
                                <div className="rate">
                                {rate.map((rate,i)=>(
                                        rate<=product.rating?<RateIcon key={i} style={{color:"orange"}}/>:
                                        <RateIcon key={i} />
                                ))}
                                </div>
                                <div className="product-discription">
                                    <p>{product.title}</p>
                                    <p>{product.description}</p>
                                    <p>{product.selling_price}ETB</p>
                                    <Button className="cartbtn" onClick={()=>onClickHandler(product._id,product.title)} color="primary" className={classes.addCartBtn} variant="outlined">
                                        <CartIcon/>
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ProductCatagory/>
        </div>
    )
}
