import React ,{useState,useRef} from 'react';
import './Detail.css';
import { Tableimage } from './Tableimage2';
export default function Detail(){
    const [accept,setaccept]=useState(false);
    const [selectedSize, setSelectedSize] = useState(true);
    const inputRef=useRef([]);
    const handleSizeClick = (index) => {
     
      const inputRefs = inputRef.current;
    
      inputRefs.forEach((element, i) => { //i index de l'element dans le tableau
        if (i === index) {
          if (element) {
            if( element.style.color === 'red'){
              element.style.color = 'black';
              setSelectedSize(true);
            }else{
              element.style.color = 'red'
              setSelectedSize(false);
            }
          }
        } else {
          if (element) {
            element.style.color = 'black';
            
          }
        }
      });
      
      
    };
   const submit=(e)=>{
    e.preventDefault();
    setaccept(true);

   }
    
    
    const spanStyle = {
        color: 'red',
        fontSize: '16px',
        
      };
    return(
        <>
        <div className='Globa-detail'>
         {Tableimage.map((item,index)=>(
            <div key={index} className='image-containeur'>
            <div className='image-containeur'>
                <img src={item.image[0]}  alt={`Image ${index + 1}`}  />
                <div className="additional-image">
                {item.image.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 2}`} />
          ))}
        </div>
                
            </div>
            <div className='desc-produit'>
            <h3>{item.titre}</h3>
            <p>{item.paragraphe}</p>
            <p><span style={spanStyle}>Available</span>: {item.available}</p>
            <p><span style={spanStyle}>Brand</span>:  {item.Brand}</p>
            <p className='price'>{item.price}</p>
            <p className='discount'>{item.discount}</p>
            {item.size.map((size,index) =>(
                <div className='tab-size' >
                    <button className='size' key={index} ref={(ref) => (inputRef.current[index] = ref)}
             onClick={()=>handleSizeClick(index)} >{size}</button>
             
                </div>
            )
            )}
            {accept && selectedSize && <p className='erreur_choix' >Il faut choisir taille</p>}
            <button className="button1" type='submit' onClick={submit}>ADD</button>
            </div>
            </div>
            
         )
         )}          
        </div> 
        </>
    )

};
