import React, { useState } from 'react'
import "./Chatbot.css"
import croix from "./../assets/bouton-croix.png"
import envoyer from "./../assets/envoyer-licone.png"
function Chatbot({onClose}) {
    const handleFerme = () => {
        onClose(); // Appeler la fonction onClose pour fermer le composant Chatbot
    };
   
  return (


    <div  className="chat-glob">
    <div className="chatbot">
    <p className='check'>Chat for more info </p>
    <img src={croix} alt="image" className='image-croix' onClick={handleFerme}/>
    </div>
    <div className='espace-dialogue'>
    </div>
     <div className='ecrire'>
        <input type="text" placeholder='type a message'className='label'/>
        <img src={envoyer} alt="image" className='image-envoi' />
     </div>
    </div>
  )
}

export default Chatbot