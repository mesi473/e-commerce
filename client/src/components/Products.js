import React from 'react';
import Image1 from '../images/PngItem_1302530 (1).png'
import Image2 from '../images/PngItem_1302708.png'
import Image3 from '../images/PngItem_1498350.png'
import Image4 from '../images/PngItem_448874.png'
import Image5 from '../images/PngItem_1302744.png'
import Image6 from '../images/PngItem_6386477.png';
import Image9 from '../images/PngItem_2841643.png';
import Image10 from '../images/PngItem_448629.png'
import ProductCatagory from './ProductWithCatagory';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {Button,makeStyles} from '@material-ui/core';

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
                    <div className="product-item">
                        <img src={Image1} alt=""/>
                        <div className="rate">
                        {rate.map((rate,i)=>(
                                <RateIcon key={i}/>
                        ))}
                        </div>
                        <div className="product-discription">
                            <p>new and made by slik</p>
                            <p>500ETB</p>
                            <Button color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon/>
                            </Button>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={Image2} alt=""/>
                        <div className="rate">
                        {rate.map((rate,i)=>(
                                <RateIcon key={i}/>
                        ))}
                        </div>
                        <div className="product-discription">
                            <p>new and made by slik</p>
                            <p>500ETB</p>
                            <Button color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon/>
                            </Button>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={Image3} alt=""/>
                        <div className="rate">
                        {rate.map((rate,i)=>(
                                <RateIcon key={i}/>
                        ))}
                        </div>
                        <div className="product-discription">
                            <p>new and made by slik</p>
                            <p>500ETB</p>
                            <Button color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="products-item-section">
                    <div className="product-item">
                        <img src={Image4} alt=""/>
                        <div className="rate">
                        {rate.map((rate,i)=>(
                                <RateIcon key={i}/>
                        ))}
                        </div>
                        <div className="product-discription">
                            <p>new and made by slik</p>
                            <p>500ETB</p>
                            <Button color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon/>
                            </Button>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={Image5} alt=""/>
                        <div className="rate">
                        {rate.map((rate,i)=>(
                                <RateIcon key={i}/>
                        ))}
                        </div>
                        <div className="product-discription">
                            <p>new and made by slik</p>
                            <p>500ETB</p>
                            <Button color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon/>
                            </Button>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={Image6} alt=""/>
                        <div className="rate">
                        {rate.map((rate,i)=>(
                                <RateIcon key={i}/>
                        ))}
                        </div>
                        <div className="product-discription">
                            <p>new and made by slik</p>
                            <p>500ETB</p>
                            <Button color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductCatagory/>
        </div>
    )
}
