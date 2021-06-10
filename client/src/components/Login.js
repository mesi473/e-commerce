import React from 'react';
import Header from './Header'
import {Link} from 'react-router-dom'


export default function Login() {
    const [state,setState]=React.useState({
        username:'',
        password:''
    })
    return (
        <div className="login-page">
            <Header/>
            <div className="login-area">
                <div className="log">
                    <h1>login</h1>
                    <input
                    onChange={(e)=>{
                        setState({...state,username:e.target.value})
                    }} 
                    value={state.username} type="text" name="username" placeholder="username"/>
                    <input onChange={(e)=>{
                        setState({...state,password:e.target.value})
                    }} 
                    value={state.password} type="password" name="password" placeholder="password" required="required"/>
                    <Link  to="/admin/dashboard" onClick={()=>{
                        
                    }}>Login</Link>
                </div>
            </div>
        </div>
    )
}
