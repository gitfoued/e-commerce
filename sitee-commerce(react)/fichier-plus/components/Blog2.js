import React from 'react';
import "./Blog2.css"
import { Link } from 'react-router-dom';

export function Blog2({tableau}) {
    
    return(
<>
<div className='blog2-container'>
    {tableau.map((item,index)=>{

    return(
    <div className='blog2-elements' key={index}>
    <div>
        <Link to={item.path} className='link-Blog'>
<img src={item.image} alt={`Image {index + 1}`} className='image' />
        </Link>
    </div>
    <p className='date'>{item.Date}</p>
 <div>
 <Link to={item.path} className='link-blog'><p  className='title'>{item.title}</p></Link></div>
 <div><Link to={item.path} className='link-blog'><p className='description'>{item.description}</p></Link></div>


    </div>
)

    })}





</div>




</>

    )
}