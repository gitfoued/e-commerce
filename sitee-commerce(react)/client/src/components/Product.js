import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import IntersectionObserverComponent from '../animation/Anime';
import { Rating } from './Reating';
import Detail from './Detail';
function Product({donnee}){
  
    return(
     <>
      <div className='globale'>
      <IntersectionObserverComponent className="image-containeur">
        <div className='image-containeur'>
        {donnee.map((element, index) => {
  const imageUrl = `http://localhost:4000/${element.image}`;
  return (
    <div key={index} className="element-image">
      <Link to="/Detail">
        <img src={imageUrl} alt={`Image ${index + 1}`} className='image' />
      </Link>
      <div className='ligne3'></div>
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
export default Product;