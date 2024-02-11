import React from 'react';
import {Navbar} from '../components/Navbar';
import {Home1} from '../components/Home1';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Tableau1,Tableau2,Tableau3 } from '../components/Tableaimage';
import Producthome from '../components/Producthome';
import Cards from '../components/Cards';

function Home(){
    return(
        <>
       
       <div className='all-home'>
        <Navbar findnav={'   search Home'}/>
        <Home1/>
        <Producthome donnee={Tableau1}/>
        
        <Product donnee={Tableau2}/><Cards donnee={Tableau3}/><Cards donnee={Tableau3}/>
       <Footer/>
        
        </div>
        
        
        </>
    )
}
export default Home;