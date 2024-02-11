import React,{useState} from 'react';
import{Link} from 'react-router-dom';
import './Home1.css';
import {MenuItems,MenuItems2,MenuItems3} from './MenuItems';
import'./Dropdown.css';

export function Dropdown(){
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    
    return(
        <>
        <ul onClick={handleClick} 
        className={click ? 'dropdown-menu-clicked':'dropdown-menu'}>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link className={item.className}
                        to={item.path}
                        onClick={()=>setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export function Dropdown2(){
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

  return(
    <>
    <ul onClick={handleClick}
    className={click ? 'dropdown-menu-clicked':'dropdown-menu1'}>
        {MenuItems2.map((item,index)=>{
            return(
                <li key={index}>
                    <Link className={item.className} to={item.path}>{item.title}</Link>
                </li>
            )
        })}
    </ul>
    
    
    </>
)
    }
export function Dropdown3({props}){
        const [click,setClick]=useState(false);
        const handleClick=()=>setClick(!click);
    
      return(
        <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu-clicked':'dropdown-menu-user'}>
            {props.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link className={item.className} to={item.path}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
        
        
        </>
    )
}




