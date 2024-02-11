import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact1.css';
import image17 from './../assets/image17.png'
function Contact1() {
    const [accept,setaccept]=useState(false)
    const [Nom,setNom]=useState('')
    const [raison,setraison]=useState('')
    const submit=(e)=>{
        e.preventDefault();
        setaccept(true);
    }

return(<div>
    <div className='glob'>
    <div className='globalecontact1'>
        <div className='contact1part1'>
            <h2>GET IN TOUCH</h2>
            <p>We are here for you! how we can help</p>
            <div className='formulaire2'>
                <form  action="rechercher" method="get">
                <input type='text'   placeholder='Name' required value={Nom} onChange={(e)=>setNom(e.target.value)}></input>
                {Nom===''&& accept &&<p className='erreur' style={{color:'red' ,position:'relative',top:'-35PX'}}>Nom non rempli</p>}
                <input type='Email'   placeholder='Email' required ></input>
                <textarea cols="10" rows="10" placeholder='Get started we are waiting for you ...' value={raison} onChange={(e)=>setraison(e.target.value)}></textarea>
                {raison===''&& accept &&<p className='erreur2' style={{color:'red' ,position:'relative',top:'-10PX'}}>Oops raison not found</p>}
                <button type='submit' onClick={submit}>Submit</button>
                        
                    </form>
                    </div>
           </div>
           <div className='contact1part2'>
             <div className='imagecontact'>
             <img src={image17} alt={image17} />
             </div>
             <div className='porteur-icon'>
             <div className='icon'>
            <i className="fas fa-map-marker-alt"></i> 
            <li><Link to='tel:+216 27562068' className='link'>674 BizerteView</Link></li>
            </div>
            <div className='icon'>
            <i className="fas fa-phone-alt icon"></i>
                <li><Link to='tel:+216 27562068' className='link'>+216 27562068</Link></li>
                </div>
                <div className='icon'>
                   <i className="fas fa-envelope icon"></i>
                  <li><Link to='info@gmail.com' className='link'>info@gmail.com</Link></li>
                </div>
                </div>
             </div>   
         
    </div>
    <div className='network'>
         <Link to='' className='link1'><i className="fab fa-facebook"></i></Link>
         <Link to='' className='link1'><i className="fab fa-twitter"></i></Link>  
         <Link to='' className='link1'><i className="fab fa-instagram"></i></Link>
        </div> 
    </div>
    </div>
)
}
export default Contact1;