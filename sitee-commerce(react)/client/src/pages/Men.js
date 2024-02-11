import React ,{useState,useEffect} from 'react';
import {Navbar} from '../components/Navbar';
import './Men.css';
import Footer from '../components/Footer';
import Product from '../components/Product';
import {Tableau2,Tableau3 } from '../components/Tableaimage';
import Cards from '../components/Cards';
import axios  from 'axios';

function Men(){
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
export default Men;