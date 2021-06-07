import React from 'react'
import Image6 from '../../images/PngItem_6386477.png';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import { Button ,CircularProgress} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import Category from './icons/Category.png';
import AddClothIcon from './icons/AddCloth.png';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import CloseIcon from '@material-ui/icons/Close';
import SoldIcon from './icons/SoldIcon.png';
import Profile from '@material-ui/icons/Person';
import './dashboard.css';
import Home from './Home';
import AddCloth from './AddCloth';
import AddCategory from './AddCategory';
import Update from './Update';
import Delete from './Delete';
import Sold from './SoldItem';
import Reset from './Profile';

export default function AdminDashboard() {
    const [component, setComponent] = React.useState("Home");
    const [showSidebar, setShow] = React.useState(false);
    function RenderCom() {
        switch (component) {
            case "Home":
                return <Home/>
            case "AddCloth":
                return <AddCloth/>
            case "AddCategory":
                return <AddCategory/>
            case "Update":
                return <Update/> 
            case "Delete":
                return <Delete/>
            case "Sold":
                return <Sold/>
            case "Reset":
                return <Reset/>
            default:
                return null
        }
    }
    return (
        <div className="dashboard">
            <div className="dashboard-appbar">
                <header>
                    <nav>
                        <div className="dashboard-menubarIcon">
                            <span className="menu-button"><Button variant="outlined" onClick={()=>{setShow(!showSidebar)}}><MenuIcon /></Button></span>
                            <label style={{marginTop:"10px"}}>Dashboard</label>
                        </div>
                        <div className="user-profile">
                            <div className="profilePic"><img src={Image6} alt="" /></div>
                            <label>Admin</label>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="dashboard-main">
                {RenderCom()}
            </div>
            {showSidebar?
                <div className="sidebar-2">
                <CloseIcon onClick={()=>{setShow(!showSidebar)}}/>
                <div className="sidebar-icons" onClick={() => {
                                setComponent("Home")
                            }}>
                    <HomeIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Home</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                    setComponent("Employee")
                    }}>
                    <img src={AddClothIcon} style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Add Cloth</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                                setComponent("Finance")
                            }}>
                    <img src={Category} style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Category</h4></span>
                </div>
                <div className="sidebar-icons" onClick={() => {
                                setComponent("Home")
                            }}>
                    <UpdateIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Update</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                    setComponent("Employee")
                    }}>
                    <DeleteIcon style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Delete</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                                setComponent("Finance")
                            }}>
                    <img src={SoldIcon} style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Sold</h4></span>
                </div>
                <div className="sidebar-icons" onClick={async () => {
                                setComponent("Finance")
                            }}>
                    <Profile style={{color:"#fff",width:"40px",height:"40px"}}/>
                    <span><h4>Profile</h4></span>
                </div>
            </div>
            :null
            }
            <div className="dashboard-sidebar">
                <div className="dashboard-logo">
                    <h3>Tsega E-Shope</h3>
                </div>
                <div className="dashboard-links">
                    <ul>
                    <li><Button
                            onClick={async () => {
                                setComponent("Home")
                            }}
                            fullWidth variant="outlined">Home</Button></li>
                        <li><Button
                            onClick={() => {
                                setComponent("AddCloth")
                            }}
                            fullWidth variant="outlined">Add cloth</Button></li>
                        <li><Button
                            onClick={async () => {
                                setComponent("AddCategory")
                            }}
                            fullWidth variant="outlined">Add catagory</Button></li>
                        <li><Button
                            onClick={async () => {
                                setComponent("Update")
                            }}
                            fullWidth variant="outlined">update</Button></li>
                        <li><Button
                            onClick={() => {
                                setComponent("Delete")
                            }}
                            fullWidth variant="outlined">Delete</Button></li>
                        <li><Button
                            onClick={() => {
                                setComponent("Sold")
                            }}
                            fullWidth variant="outlined">Sold item</Button></li>
                        <li><Button
                            onClick={() => {
                                setComponent("Reset")
                            }}
                            fullWidth variant="outlined">reset password</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
