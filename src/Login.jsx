import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const Login=() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(username)
    }
    
    const handleLogin =(e)=>{
        if (username!=='' && password!== ''){
            navigate('/productlist')
        }else{
            alert("Invalid Username or Password.");
        }
        console.log('Username:', username);
    }

    return(
        <div className='App'>
        <div className='form-container'>
            <h2>Log In</h2>
        <form className='log-in-form' onSubmit={handleSubmit}>
            <label htmlFor="username" >Username:</label>
            <input value= {username} type="text" id="username" name="username" placeholder= "Enter your Username" onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="password" >Password:</label>
            <input value={password} type="password" id="password" name="password" placeholder= "Enter your Password" onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit" onClick={handleLogin}>Log In</button>
        </form>
        </div>
        </div>
    )
}