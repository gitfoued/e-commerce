import React,{useState,useEffect} from 'react';
import { Navbar } from "../components/Navbar";
import { Clothes } from '../components/Clothes.jsx';
import "./Clothespage.css"
import Product from '../components/Product';
import Cards from '../components/Cards';
import axios from "axios"

const Clothespage=()=>{
    const [array,setarray]=useState([[]])
    useEffect(()=>{
        axios.get('http://localhost:4000/Men')
        .then(response => {
          setarray(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);
    const tableau_image2=array.slice(0,1);
    return(
        <>
        <Navbar findnav={ "search Clothes"}/>
        <div className='content-clothes'>
        <div className='partie1'>
        <Clothes />
        </div>
        <div className='partie2'>
        <Product donnee={array}/>
       
        </div>
        </div>
        <div className='content-clothes-2'>
        <div className='partie3'>
        <Cards donnee={tableau_image2}/>
        </div>
        <div className='partie2'>
        <Product donnee={array}/>
       
        </div>
        </div>
        <div className='content-clothes-2'>
        <div className='partie3'>
        <Cards donnee={tableau_image2}/>
        </div>
        <div className='partie2'>
        <Product donnee={array}/>
       
        </div>
        </div>
       
        </>
    )
}
export default Clothespage;