import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import IntersectionObserverComponent from '../animation/Anime';
import { Rating } from './Reating';
function Product({donnee}){
  
    return(
     <>
      <div className='globale'>
      <IntersectionObserverComponent className="image-containeur">
        <div className='image-containeur'>
      {donnee.map((element, index) => (
        <div key={index} className="element-image">
          <img src={element.image} alt={`Image {index + 1}`} className='image' />
          <div className='ligne3'></div>
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
    )
    

}
export default Product;