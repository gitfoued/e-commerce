import React from 'react';
import { Link } from 'react-router-dom';
import './Producthome.css';
import image10 from '../assets/image10.jpg';
import IntersectionObserverComponent from '../animation/Anime';
import { Rating } from './Reating';
function Producthome({donnee}){
  
    return(
     <>
    
      <div className='globale1'> 
        <h3>NEW PRODUCTS DEALS</h3>
        <div className='ligne4'></div>
        <IntersectionObserverComponent className="image-containeur">
        <div className='image-containeur'>
      {donnee.map((element, index) => (
        <div key={index} className="element-image" >
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
      <div className='ligne5'></div>
      <IntersectionObserverComponent className="Image-women">
      <div className='Image-women'>
        <h1>NEW COLLECTION</h1>
        <p className="title">Shop Men's & Women's & children</p>
        <button className="button">SHOP NOW</button>
        <img src={image10} alt='image10'/>
        


      </div>
      </IntersectionObserverComponent>
      </div>
     
     </>
    )
    

}
export default Producthome;