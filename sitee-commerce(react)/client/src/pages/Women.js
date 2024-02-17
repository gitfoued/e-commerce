import React ,{useState,useEffect} from 'react';

import { Navbar } from '../components/Navbar';
import Product from '../components/Product';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import axios  from 'axios';
function Women() {
    const [array,setarray]=useState([[]])
    useEffect(()=>{
        axios.get('http://localhost:4000/Women')
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
     <div className='body1'>
        <Navbar findnav={'  search clothes'}/>
        <div className='glob2'>
        <div className='men'>
        <Product donnee={array}/>
        <div className='cardMen'>
        <Cards donnee={tableau_image2}/>
        </div>
        </div>
        <div className='men'>
        <Product donnee={array}/>
        <div className='cardMen'>
        <Cards donnee={tableau_image2}/>
        </div>
        </div>
        <div className='men'>
        <Product donnee={array}/>
        <div className='cardMen'>
        <Cards donnee={tableau_image2}/>
        </div>
        </div>
        
        <div className='men'>
        <Product donnee={array}/>
        <div className='cardMen'>
        <Cards donnee={tableau_image2}/>
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