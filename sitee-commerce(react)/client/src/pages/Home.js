import React,{useState,useEffect} from 'react';
import {Navbar} from '../components/Navbar';
import {Home1} from '../components/Home1';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Tableau1,Tableau2,Tableau3 } from '../components/Tableaimage';
import Producthome from '../components/Producthome';
import Cards from '../components/Cards';
import images from "./../assets/images.png"
import Chatbot from '../components/Chatbot';
import axios from "axios"
import "./Home.css"
function Home(){
    const [chatVisible, setChatVisible] = useState(false);
    const [imagehome,setimages]=useState([])
    useEffect(() => {
        // Charger la liste d'images depuis le backend
        axios.get('http://localhost:4000/')
            .then(response =>{ 
                console.log(response.data)
                setimages(response.data)})
            .catch(error => console.error('Erreur de chargement des images:', error));
    }, []);

    const handleChatToggle = () => {
        setChatVisible(!chatVisible);
    };
    return(
        <>
       <div className='all-home'>
        <Navbar findnav={'   search Home'}/>
        <Home1 props={imagehome[0]}/>
        <Producthome donnee={Tableau1}  props={imagehome[1]}/>
        
        <Product donnee={Tableau2}/><Cards donnee={Tableau3}/><Cards donnee={Tableau3}/>
        <div>
                    {chatVisible ? (
                        <div>
                            <Chatbot onClose={handleChatToggle} />
                        </div>
                    ) : (
                        <img src={images} alt="image" className='chatbot-image' onClick={handleChatToggle} />
                    )}
                </div>
       <Footer/>
        </div>
        </>
    )
}
export default Home;