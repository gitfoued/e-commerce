import React,{useState,useEffect} from 'react';
import {Navbar} from '../components/Navbar';
import {Home1} from '../components/Home1';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Producthome from '../components/Producthome';
import Cards from '../components/Cards';
import images from "./../assets/images.png"
import Chatbot from '../components/Chatbot';
import axios from "axios"
import "./Home.css"
function Home(){
    const [chatVisible, setChatVisible] = useState(false);
    const [imagehome,setimages]=useState([])
    const [tableimages,settableimages]=useState([])
    useEffect(() => {
        const fetchData = async (url, setter) => {
          try {
            const response = await axios.get(url);
            console.log(response.data);
            setter(response.data);
          } catch (error) {
            console.error('Erreur de chargement des images:', error);
          }
        };
      
        fetchData('http://localhost:4000/', setimages);
        fetchData('http://localhost:4000/home', settableimages);
      }, []);

const tableau_image=tableimages.slice(0,4);
const tableau_image1=tableimages.slice(4,8);
const tableau_image2=tableimages.slice(8,9);

    const handleChatToggle = () => {
        setChatVisible(!chatVisible);
    };
    return(
        <>
       <div className='all-home'>
        <Navbar findnav={'   search Home'}/>
        <Home1 props={imagehome[0]}/>
        <Producthome donnee={tableau_image}  props={imagehome[1]}/>
        
        <Product donnee={tableau_image1}/>
        <Cards donnee={tableau_image2}/>
        <Cards donnee={tableau_image2}/>
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