import React from 'react';
import { Navbar } from "../components/Navbar";
import { Clothes } from '../components/Clothes.jsx';
import "./Clothespage.css"
import Product from '../components/Product';
import {Tableau2,Tableau3 } from '../components/Tableaimage';
import Cards from '../components/Cards';

const Clothespage=()=>{
    return(
        <>
        <Navbar findnav={ "search Clothes"}/>
        <div className='content-clothes'>
        <div className='partie1'>
        <Clothes />
        </div>
        <div className='partie2'>
        <Product donnee={Tableau2}/>
       
        </div>
        </div>
        <div className='content-clothes-2'>
        <div className='partie3'>
        <Cards donnee={Tableau3}/>
        </div>
        <div className='partie2'>
        <Product donnee={Tableau2}/>
       
        </div>
        </div>
        <div className='content-clothes-2'>
        <div className='partie3'>
        <Cards donnee={Tableau3}/>
        </div>
        <div className='partie2'>
        <Product donnee={Tableau2}/>
       
        </div>
        </div>
       
        </>
    )
}
export default Clothespage;