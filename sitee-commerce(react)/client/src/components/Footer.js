import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='footer-component'>
                <section className='section1'>
                        <Link to="/" className="logo2">SHOP<span>BAG</span></Link>
                    
                    
                        <p>Bienvenue! chez nous shoppingBag
                         en fait, il s'agit d'une boutique</p>
                         <p>en ligne qui s'interesse par le
                            fashion de nos jours .
                        </p>
                        <p>Merci pour votre attention</p>
                    
                    <div>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>

                </section>

                <section className='section2'>
                    <div>
                        <h1>COLLECTION</h1>
                    </div>
                    
                        <ul className='partie2'>
                            <li><Link to='/Women' className='link'>Womens</Link></li>
                            <li><Link to='/Men' className='link'>Men</Link></li>
                            <li><Link to='/Watche' className='link'>Watche</Link></li>
                            <li><Link to='/Pc gamer' className='link'>Pc gamer</Link></li>
                        </ul>
                   

                </section>

                <section className='section3'>
                    <div>
                        <h1>Contact</h1>
                    </div>
                    <p>7081 khetmine el alia,Bizerte</p>
                    <div className='partie3'>
                        <ul>
                            
                            <li><Link to='tel:+216 27562068' className='link'>+216 27562068</Link></li>
                            <li><Link to='/Child' className='link'>Child clothes</Link></li>
                            <li><Link to='info@gmail.com' className='link'>info@gmail.com</Link></li>

                        </ul>
                    </div>

                </section>
                <section className='section4'>
                    <div>
                        <h1>PAYMENT METHODS</h1>
                    </div>
                    <p>Voici tous les methods pour</p>
                        <p>acheter des produits .</p>
                    
                    <div className='partie4'>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-cc-paypal"></i>
                    </div>

                </section>
            </div>
          <div className='ligne2'></div>


</div>

        </>



    )
}
export default Footer;