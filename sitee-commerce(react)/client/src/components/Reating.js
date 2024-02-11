import React from 'react';
import "./Reating.css"

export function Rating({rating}){

    const star = Array.from({ length: 5 }, (_, index) => {
        return (
          <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
        );
      });
      
return <div className='rating'>{star}</div>
}