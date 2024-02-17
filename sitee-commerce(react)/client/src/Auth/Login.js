
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import './Login.css'

export default function Login() {
    const[values,setvalues]=useState({
        email:"",
        password:"",
      });
      const navigate=useNavigate();
    const [accept,setaccept]=useState(false);
    const submit=(e)=>{
        e.preventDefault();
        setaccept(true);
        axios.post('http://localhost:4000/Login',values).then((res)=>{
            console.log(res.data)
            console.log("Success")
            const token = res.data.token;
            localStorage.setItem('monToken', token);
      
            navigate('/')
           
          })
          .catch((err)=>{
       console.log(err);
          })
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
                        
                    <input type='Email'   placeholder='Email' required value={values.email} onChange={(e)=>setvalues({...values,email:e.target.value})}></input>
                        <input type='password'   placeholder='Password' required value={values.password} onChange={(e)=>setvalues({...values,password:e.target.value})}></input>
                        {values.password.length < 8 && accept && <p className='error'>password should be 8 caracter</p>}
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
