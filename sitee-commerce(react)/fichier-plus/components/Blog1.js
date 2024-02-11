import React from 'react';
import "./Blog1.css"

import { Link } from 'react-router-dom';
export function Blog1({tableau}) {
    
    
    return(
<>
<div className='Blogglobale'>
    {tableau.map((item,index)=>{
return(
  <div className='containerblog' key={index}>
    <div>
 <Link to={item.path} className='link-blog'>
<img src={item.image} alt={`Image {index + 1}`} className='image'/>
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