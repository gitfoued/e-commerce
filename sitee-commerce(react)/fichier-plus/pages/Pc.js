import React from 'react';
import {Navbar} from '../components/Navbar';
import './Men.css';
import Footer from '../components/Footer';
import Product from '../components/Product';
import {Tableau2,Tableau3 } from '../components/Tableaimage';
import Cards from '../components/Cards';


function Pc(){
    return(
        <>
        <div className='body1'>
        <Navbar findnav={'  search Pc'}/>
        
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
export default Pc;