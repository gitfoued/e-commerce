import React from 'react';
import "./clothes.css"
import { Link } from 'react-router-dom';


export const Clothes=()=>{


    return(
        <>
       <div className="container2-clothes">
        
        <ul>
            <div className="actif">
            <li><Link to="/" className='Links'>Categories</Link></li>
            </div>
            <div className="reste">
            <li><Link to="/Men" className='Links'>Men</Link></li>
            </div>
            <div className="reste">
            <li><Link to="/Women" className='Links'>Women</Link></li>
            </div>
            <div className="reste">
            <li><Link to="/Child" className='Links'>Child</Link></li>
            </div>
        </ul>
        </div>
        </>
    )
}