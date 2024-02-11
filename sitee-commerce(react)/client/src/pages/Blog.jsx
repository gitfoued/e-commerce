import React, { useState } from 'react';
import "./Blog.css"
import axios  from 'axios';
import { Link } from 'react-router-dom';
import {Navbar} from "./../components/Navbar.js"
import { useEffect } from 'react';
 function Blog() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
    const [array,setarray]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/Blog')
        .then(response => {
          setarray(response.data);
          setFilteredProducts(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);
    const handleSearch = () => {
      const filtered = array.filter(product =>
        product.titre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
  useEffect(()=>{
   handleSearch();
  },[searchTerm])
    return(
<>

    <Navbar findnav={' Search Blogs'} onsearchterm={setSearchTerm}/>
    
    {searchTerm.length > 0 && (
        <ul className='search-blog'>
          {filteredProducts.map(product => (
          <li key={product.id} className='product-blog'>{product.titre}</li>
          ))}
        </ul>
      )}
      
    <div className='content-page-blog'>
    <div className='partie1-blog'>
    {array.map((item, index) => {
        const imageUrl = `http://localhost:4000/${item.image}`;
          return (
            <div className='containerblog' key={index}>
              <div>
                <Link to={item.status} className='link-blog'>
                  <img src={imageUrl} alt={`Image ${index + 1}`} className='image' onError={(e) => console.error("Erreur de chargement d'image", e)} />
                </Link>
              </div>
              <p className='date'>{item.Date}</p>
              <div>
                <Link to={item.status} className='link-blog'>
                  <p className='title'>{item.titre}</p>
                </Link>
              </div>
              <div>
                <Link to={item.status} className='link-blog'>
                  <p className='description'>{item.description}</p>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
   </div>
</>
 )}
export default Blog;