import React from 'react';
import {Tableau2,Tableau3 } from '../components/Tableaimage';
import { Navbar } from '../components/Navbar';
import Product from '../components/Product';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
function Women() {
    return(
    <>
     <div className='body1'>
        <Navbar findnav={'  search clothes'}/>
        
        <div className='glob2'>
        <div className='men'>
        <Product donnee={Tableau2}/>
        <div className='cardMen'>
        <Cards donnee={Tableau3}/>
        </div>
        </div>
        <div className='men'>
        <Product donnee={Tableau2}/>
        <div className='cardMen'>
        <Cards donnee={Tableau3}/>
        </div>
        </div>
        <div className='men'>
        <Product donnee={Tableau2}/>
        <div className='cardMen'>
        <Cards donnee={Tableau3}/>
        </div>
        </div>
        
        <div className='men'>
        <Product donnee={Tableau2}/>
        <div className='cardMen'>
        <Cards donnee={Tableau3}/>
        </div>
        </div>
        </div>
        <div className='foote'>
       <Footer/>
       </div>
        
       </div>
        
    
    
    
    </>
    )
    
}
export default Women;