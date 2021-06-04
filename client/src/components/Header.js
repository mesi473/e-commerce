import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import CartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {OutlinedInput,InputLabel,IconButton,FormControl,InputAdornment
        ,makeStyles,Button,Badge} from '@material-ui/core'
import ETHIcon from '../images/ETH.png';
import USAIcon from '../images/USA.png';
import HomeImage from '../images/PngItem_1937090.png';
import HomeImage2 from '../images/PngItem_6183236.png';
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
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const classes=useStyle();
    
    React.useEffect(()=>{
        window.addEventListener('scroll',function(){
            var header=document.getElementsByClassName("header1");
            header[0].classList.toggle('sticky',window.scrollY>0);
            var header1=document.getElementsByClassName("header2");
            header1[0].classList.toggle('stickyup',window.scrollY>0);
            var header2=document.getElementsByClassName("search-input");
            header2[0].classList.toggle('sticky-search',window.scrollY>0);
            var sign_up_btn=document.getElementsByClassName("sign-in-btn");
            sign_up_btn[0].classList.toggle('sticky',window.scrollY>0);
        });
    })
    return (
        <div>
            <div className="header1">
                <div className="flag">
                    <img width="30px" height="30px" src={ETHIcon} alt="ETH"/>
                    <img width="30px" height="30px" style={{marginTop:"2px",marginLeft:"5px"}} src={USAIcon} alt="USA"/>
                </div>
                <button  className="sign-in-btn1" variant="contained" size="small">Sign-In</button>
            </div>
            <div className="header2">
                <div className="logo">
                    <h2>Tsega E-Shop</h2>
                </div>
                <div className="nav-item">
                    <ul>
                        <li><NavLink to="/home">
                            Home
                        </NavLink></li>
                        <li><NavLink to="" className="tooltip">
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
                        </NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div> 
                <div className="left-header">
                    <div className="search-input">
                        <input type="text" name="search" placeholder="search" />
                        <button><SearchIcon/></button>
                    </div>
                    <button className="cart-btn"><CartIcon /><Badge label="0"/></button>
                    <button  className="sign-in-btn" variant="contained" size="small">Sign-In</button>
                </div>
            </div>
            <div className="home-image">
                <img src={HomeImage2} alt="" width="50%" height="400px"/>
                <img src={HomeImage} alt="" width="50%" height="400px"/>
            </div>
        </div>
    )
}
