import React from 'react';
import './Cards.css';
import IntersectionObserverComponent from '../animation/Anime';
import { Rating } from './Reating';
import { Link } from 'react-router-dom';
import Detail from './Detail';
function Cards({donnee}){

    return(
         <>
         
         <>
      <div className='card'>
        
        <h3>HOT DEALS</h3>
        <div className='ligne6'></div>
        <IntersectionObserverComponent className="image-containeur1">
        <div className='image-containeur1'>
      {donnee.map((element, index) => (
        <div key={index} className="element-image1">
          <Link to="/Detail">
          <img src={element.image} alt={`{index + 1}`} className='image' />
          </Link>
          <div className='ligne7'></div>
          <h3>{element.titre}</h3>
         
          <p>{element.paragraphe}</p>
          <Rating rating={element.rating}/>
          <p className='price'>{element.price}</p>
          <p className='discount'>{element.discount}</p>
          
        </div>
      ))}
      </div>
      </IntersectionObserverComponent>
      </div>
     </>
         
         
         </>


    )
}
export default Cards;