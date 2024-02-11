import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import axios  from 'axios';
import {useNavigate} from "react-router-dom"

export default function Signup() {
  const[values,setvalues]=useState({
    name:"",
    email:"",
    password:"",
  });
  const[flag,setflag]=useState(true);
  const navigate=useNavigate();
  const[accept,setaccept]=useState(false);
  const submit=(e)=>{
    e.preventDefault();
    setaccept(true);
    if(values.name === "" || values.password.length < 8){
        setflag(false);
    }else{
        axios.post('http://localhost:4000/Signup',values).then((res)=>{
            console.log(res.data)
           if(res.data==="Success"){
            console.log("Success")
            navigate('/Login')
           }else{
            alert("Erreur")
           }
          })
          .catch((err)=>{
       console.log(err);
          })
        }
    
  }

    return (
        <div>
            <div className='elements'>
                <div className='button'>
                    <Link to='/'>  <i className='fas fa-arrow-left' ></i></Link>
                    <button><Link to='/' className='link'>Back </Link></button>
                </div>
                
                <div className='formulaire'>
                    <h1> Welcome to Shop<span>Bag</span></h1>
                    <p>fill all fields so we can get some info about you</p>
                       <p className='pargra'> we'll never send  you spam</p>
                    
                    <div className='fatherform'>
                    <form onSubmit={submit} action="rechercher" method="get">
                        <input type='text'   placeholder='Name' required value={values.name} onChange={(e)=>setvalues({...values,name:e.target.value})}></input>
                        {values.name=== "" && accept && <p className='error'>username is required</p>}
                        <input type='Email'   placeholder='Email' required value={values.email} onChange={(e)=>setvalues({...values,email:e.target.value})}></input>
                        <input type='password'   placeholder='Password' required value={values.password} onChange={(e)=>setvalues({...values,password:e.target.value})}></input>
                        {values.password.length < 8 && accept && <p className='error'>password should be 8 caracter</p>}
                        <button type='submit'>Sign up</button>
                        
                    </form>
                    <div className='ligne8'></div>
                    <h3>OR</h3>
                    <div className='ligne9'></div>
                    <p>Sign up with your work email</p>
                    </div>    
                    <button className='Google'>Sign up with Google</button>
                    
                    
                    
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

