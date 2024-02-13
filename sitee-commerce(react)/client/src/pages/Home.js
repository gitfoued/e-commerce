import React,{useState} from 'react';
import {Navbar} from '../components/Navbar';
import {Home1} from '../components/Home1';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Tableau1,Tableau2,Tableau3 } from '../components/Tableaimage';
import Producthome from '../components/Producthome';
import Cards from '../components/Cards';
import images from "./../assets/images.png"
import Chatbot from '../components/Chatbot';
import "./Home.css"
function Home(){
    const [chatVisible, setChatVisible] = useState(false);
    const handleChatToggle = () => {
        setChatVisible(!chatVisible);
    };
    return(
        <>
       <div className='all-home'>
        <Navbar findnav={'   search Home'}/>
        <Home1/>
        <Producthome donnee={Tableau1}/>
        
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