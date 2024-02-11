import React,{useEffect} from 'react';
import{Link} from 'react-router-dom';
import './Home1.css';
import IntersectionObserverComponent from '../animation/Anime';
import image1 from '../assets/image1.jpg';



export function Home1(){
    
   
     
    return(
        <>
        
        <div className="premierpartie">
        <IntersectionObserverComponent className="container1">
         <div className="container1">
        <p className="title1">TOP BRANDS</p>
        <h1>NEW COLLECTION</h1>
        <p className="title2">Lorem ipsum dolor at mind,constructeur pedagore</p>
        <button className="button1">SHOP NOW</button>
        <img src={image1} alt='image1'/>
       </div>
       </IntersectionObserverComponent>
       
     
    
   
    <div className="container2">
        
        <ul>
            <div className="actif">
            <i className="fas fa-folder"></i>
            <li><Link to="/" className='Links'>Categories</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-home"></i>
            <li><Link to="/" className='Links'>Home</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-tshirt"></i>
            <li><Link to="/Clothes" className='Links'>Clothing</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-desktop"></i>
            <li><Link to="/Electronics" className='Links'>Electronics</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-clock"></i>
            <li><Link to="/Clothes" className='Links'>Watches</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-shoe-prints"></i>
            <li><Link to="/Clothes" className='Links'>Shoes</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-blog"></i>
            <li><Link to="/Blog" className='Links'>Blog</Link></li>
            </div>
            <div className="reste">
            <i className="fas fa-envelope"></i>
            <li><Link to="/Contact us" className='Links'>Contact</Link></li>
            </div>
        </ul>
    </div>


</div>

        
        
        
        </>
    )

}
