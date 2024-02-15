import React, { useState } from 'react'
import axios from "axios"
import "./Chatbot.css"
import croix from "./../assets/bouton-croix.png"
import envoyer from "./../assets/envoyer-licone.png"
function Chatbot({onClose}) {
    const handleFerme = () => {
        onClose(); // Appeler la fonction onClose pour fermer le composant Chatbot
    };
   const [prompt,setprompt]=useState("")
   const [response,setresponse]=useState("")
   const handlesubmit=async (e)=>{
    e.preventDefault()
    if(prompt.trim()!== ""){
     await axios.post("http://localhost:4000/chat",{prompt}).then((res)=>{
      console.log(res.data)
      setresponse(res.data)
     }).catch((err)=>{
      console.log(err)
     })
    }else{
      alert("oops pas de donnees")
    }
   }

  return (
<>

    <form  className="chat-glob" >
    <div className="chatbot">
    <p className='check'>Chat for more info </p>
    <img src={croix} alt="image" className='image-croix' onClick={handleFerme}/>
    </div>
    {response ?
    <div className='espace-dialogue'>
      <input type="text
     value={response} " />
    </div>
    :<div className='espace-dialogue'>
      </div>
      }
<div className='form-bott'>
     <div className='ecrire'>
        <input type="text" placeholder='type a message' value={prompt} className='label' onChange={(e)=>{setprompt(e.target.value)}}/>

     </div>
     <button className='button' type='submit' onClick={handlesubmit}> 
        <img src={envoyer} alt="image" className='image-envoi'  />
        </button>
   
      </div>
    </form>
    </>
  )
}

export default Chatbot