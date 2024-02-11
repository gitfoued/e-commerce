import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const [password,setpassword]=useState('')
    const [accept,setaccept]=useState(false);
    const submit=(e)=>{
        e.preventDefault();
        setaccept(true);
    }
    return (
        <div>
           <div className='Global-log'>
                <div className='button'>
                    <Link to='/'>  <i className='fas fa-arrow-left' ></i></Link>
                    <button><Link to='/' className='link'>Back </Link></button>
                </div>
                
                <div className='formulaire-log'>
                    <h1> Welcome to Shop<span>Bag</span></h1>
                    <p>Connectez-vous pour avoir plusieurs surprises !</p>
                       <p className='pargra'> we'll never send  you spam</p>
                    
                    <div className='fatherform-log'>
                    <form onSubmit={submit} action="rechercher" method='post' >
                        
                        <input type='Email'   placeholder='Email' required ></input>
                        <input type='password'   placeholder='Password' required value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                        {password.length < 8 && accept && <p className='error'>password should be 8 caracter</p>}
                        <button type='submit'>Log in</button>
                        
                    </form>
                    <div className='ligne8'></div>
                    <h3>OR</h3>
                    <div className='ligne9'></div>
                   <p><Link to='/' className='pass-link'>Forgot password</Link></p>
                    </div>    
                    <button className='Google'>Log in with Google</button>
                    
                    
                    
                    <div className='network'>
         <Link to='' className='link1'><i className="fab fa-facebook"></i></Link>
         <Link to='' className='link1'><i className="fab fa-twitter"></i></Link>  
         <Link to='' className='link1'><i className="fab fa-instagram"></i></Link>
        </div> 



                </div>
            </div>








        </div>
    )
}
