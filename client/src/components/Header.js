import React from 'react';
import '../App.css';
import {NavLink,Link} from 'react-router-dom';
import CartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles,Badge} from '@material-ui/core'
import ETHIcon from '../images/ETH.png';
import USAIcon from '../images/USA.png';
import {useSelector} from 'react-redux';

const useStyle=makeStyles({
    searchInput:{
        borderRadius:"50px",
        height:"50px"
    },
    cartButton:{
        borderRadius:"100px",
        height:"50px",
        marginLeft:"100px"
    },
    signInBtn:{
        borderRaduis:"10px",
        marginTop:'5px',
        backgroundColor:"#A7D81C",
        marginLeft:"auto",
        height:"30px"
    }
})

export default function Header() {
    const CartItemNum=useSelector(state=>state.increaseCartNumber.numberOfItemInTheCart);
    
    return (
        <div>
            <div className="header1">
                <div className="flag">
                    <img width="30px" height="30px" src={ETHIcon} alt="ETH"/>
                    <img width="30px" height="30px" style={{marginTop:"2px",marginLeft:"5px"}} src={USAIcon} alt="USA"/>
                </div>
                <Link to="/login">
                    <button className="sign-in-btn1" variant="contained" size="small">
                    Sign-In</button>
                </Link>
            </div>
            <div className="header2">
                <div className="logo">
                    <h2>Tsega E-Shop</h2>
                </div>
                <div className="nav-item">
                    <ul>
                        <li><NavLink to="/">
                            Home
                        </NavLink></li>
                        <li><div className="tooltip">
                            Catagory
                            <div className="tooltiptext">
                                <ul>
                                    <li><NavLink  to="/catagory/mele">Men</NavLink></li>
                                    <li><NavLink to="/catagory/Female">Female</NavLink></li>
                                    <li><NavLink to="/catagory/traditional">Traditional</NavLink></li>
                                    <li><NavLink to="/catagory/mele">Brand</NavLink></li>
                                    <li><NavLink to="/catagory/Female">Summer</NavLink></li>
                                    <li><NavLink to="/catagory/traditional">Winter</NavLink></li>
                                </ul>
                            </div>
                        </div></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div> 
                <div className="left-header">
                    <div className="search-input">
                        <input type="text" name="search" placeholder="search" />
                        <button><SearchIcon/></button>
                    </div>
                    <Link to="/product/selectedproduct">
                        <button className="cart-btn">
                            <Badge badgeContent={CartItemNum} color="secondary">
                                <CartIcon />
                            </Badge>
                        </button>
                    </Link>
                    <Link to="/login">
                    <button
                      className="sign-in-btn" variant="contained" size="small">Sign-In</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
