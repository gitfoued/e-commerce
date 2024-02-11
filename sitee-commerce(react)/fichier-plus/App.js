
import React from 'react';
import './main.css';
import { Component } from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Signup from "./Auth/Signup";
import Women from './pages/Women';
import Contact from './pages/Contact';
import Login from './Auth/Login';
import Blog from './pages/Blog';
import Child from './pages/Child';
import Watch from './pages/Watch';
import Phone from './pages/Phone';
import Pc from './pages/Pc';
import Produit from './pages/Produit';
import  Clothespage  from './pages/Clothespage';
class App extends Component {
 render(){
  return (
    <>
    <BrowserRouter>
    
    <Routes>
     <Route path='/' exact element={<Home/>}  />
     <Route path='/Men' exact element={<Men/>}  />
     <Route path='/Women' exact element={<Women/>}  />
     <Route path='/Signup' exact element={<Signup/>}  />
     <Route path='/Contact us' exact element={<Contact/>}  />
     <Route path='/Login' exact element={<Login/>}  />
     <Route path='/Blog' exact element={<Blog/>}  />
     <Route path='/Child' exact element={<Child/>}  />
     <Route path='/Watch' exact element={<Watch/>}  />
     <Route path='/Phone' exact element={<Phone/>}  />
     <Route path='/Pc' exact element={<Pc/>}  />
     <Route path='/Clothes' exact element={<Clothespage/>}  />
     <Route path='/produit' exact element={<Produit/>}  />
     </Routes>
     
    </BrowserRouter>
    </>
      

    
  )
 }
  
}

export default App;
