import { useRef } from 'react';
import React,{useState} from 'react';
import{Link} from 'react-router-dom';
import './Navbar.css';
import {Dropdown,Dropdown2,Dropdown3} from './Dropdown' ;
import { MenuItems3 } from './MenuItems';

export function Navbar({findnav , onsearchterm}){
    const [click,setClick]=useState(false);
    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);
    const [dropDown, setdropDown]=useState(false);
    const [dropDown2, setdropDown2]=useState(false);
    const [dropDown3, setdropDown3]=useState(false);
    const inputRef=useRef(null);
    const rendrefocus=()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    const onMouseEnter3=()=>{
            setdropDown3(true);
            
    } 
    const onMouseEnter=()=>{
        if(window.innerWidth<960) {
            setdropDown(false);
        }else 
            setdropDown(true);
       
            
    }
    const onMouseEnter2=()=>{
        if(window.innerWidth<960) {
            setdropDown2(false);
        }else 
            setdropDown2(true);
        
        
    }
    const onMouseLeave=()=>{
        if(window.innerWidth<960) {
            setdropDown(false);
            setdropDown2(false);
            setdropDown3(false);
        }else {
            setdropDown(false);
            setdropDown2(false);
            setdropDown3(false);
        }
    }
    return(
    <>
   {/* start header */}
  <nav className="header">
    <div className="container1">
        
        <Link to="/" className="logo">SHOP<span>BAG</span></Link>
        <div className="searchbar">
        <form  action="rechercher" method="get">
            <input type="text" ref={inputRef} onClick={rendrefocus} placeholder={findnav} onChange={(e)=>onsearchterm(e.target.value)}  />
          </form>
          <i className='fas fa-search'></i>
        </div>
        <div>
          <i className="fas fa-shopping-cart"/>
        </div>
    </div>

    <div className="ligne"></div>
    <div className={click ? 'container-nav':'container2'}>
        <ul>
            <li><Link to="/" className='nav' onClick={closeMobilemenu}>Home</Link></li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><Link to="/Clothes" className='nav' onClick={closeMobilemenu}>Clothing <i className='fas fa-caret-down'/>
            </Link> {dropDown &&<Dropdown />}</li>
            <li onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave} ><Link to="/Electronics" className='nav' onClick={closeMobilemenu}>Electronics <i className='fas fa-caret-down'/></Link>{dropDown2 &&<Dropdown2 />}</li>
            <li><Link to="/Blog" className='nav' onClick={closeMobilemenu}>Blog</Link></li>
            <li><Link to="/contact us" className='nav' onClick={closeMobilemenu}>Contact us</Link></li>
        </ul>
        
    </div>
    <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
       
    {/* fa-user contient sign up et log in  ne pas responsive*/}
    <div onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave}>
        <i className="fas fa-user">{dropDown3 && <Dropdown3 props={MenuItems3}/>}</i>
    </div>
        
</nav>
  
    </>
    
    )
}