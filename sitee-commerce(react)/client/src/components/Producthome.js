import React from 'react';
import { Link } from 'react-router-dom';
import './Producthome.css';
import image10 from '../assets/image10.jpg';
import IntersectionObserverComponent from '../animation/Anime';
import { Rating } from './Reating';
import Detail from './Detail';
function Producthome({donnee, props}){
    return(
     <>
    
      <div className='globale1'> 
        <h3>NEW PRODUCTS DEALS</h3>
        <div className='ligne4'></div>
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
      <div className='ligne5'></div>
      <IntersectionObserverComponent className="Image-women">
      <div className='Image-women'>
        <h1>NEW COLLECTION</h1>
        <p className="title">Shop Men's & Women's & children</p>
       <Link to='/Women'><button className="button">SHOP NOW</button></Link> 
        <img src={`http://localhost:4000/${props}`} alt='image1' />
        


      </div>
      </IntersectionObserverComponent>
      </div>
     
     </>
    )
    

}
export default Producthome;