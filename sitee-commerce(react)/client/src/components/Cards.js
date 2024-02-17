import React from 'react';
import './Cards.css';
import IntersectionObserverComponent from '../animation/Anime';
import { Rating } from './Reating';
import { Link } from 'react-router-dom';
import Detail from './Detail';
function Cards({donnee}){

    return(
         <>
         
         
      <div className='card'>
        
        <h3>HOT DEALS</h3>
        <div className='ligne6'></div>
        <IntersectionObserverComponent className="image-containeur1">
        <div className='image-containeur1'>
        {donnee.map((element, index) => {
  const imageUrl = `http://localhost:4000/${element.image}`;

  return (
    <div key={index} className="element-image1">
      <Link to="/Detail">
        <img src={imageUrl} alt={`${index + 1}`} className='image' />
      </Link>
      <div className='ligne7'></div>
      <h3>{element.titre}</h3>
      <p>{element.description}</p>
      <Rating rating={element.rating}/>
      <p className='price'>{element.price}</p>
      <p className='discount'>{element.promotion}</p>
    </div>
  );
})}

      </div>
      </IntersectionObserverComponent>
      </div>
     </>
         


    )
}
export default Cards;