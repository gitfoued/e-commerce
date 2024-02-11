import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
  const[name,setname]=useState("");
  const[password,setpassword]=useState("");
  const[flag,setflag]=useState(true);
  const[accept,setaccept]=useState(false); 
  const submit=(e)=>{
    e.preventDefault();
    setaccept(true);
    if(name === "" || password.length < 8){
        setflag(false);
    }else{
        //envoi des donnees vers le backend
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
                        <input type='text'   placeholder='Name' required value={name} onChange={(e)=>setname(e.target.value)}></input>
                        {name=== "" && accept && <p className='error'>username is required</p>}
                        <input type='Email'   placeholder='Email' required ></input>
                        <input type='password'   placeholder='Password' required value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                        {password.length < 8 && accept && <p className='error'>password should be 8 caracter</p>}
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

