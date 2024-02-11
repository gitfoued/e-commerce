
import React , {useState}from 'react';
import { useEffect } from 'react';


  function Filter({ data }) {
    // État pour stocker les filtres sélectionnés
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filtereditem, setfiltereditem] = useState(data);
    // Fonction de gestion du filtre
    const handleclickfilter = (selectedCategory) => {
      // Vérifie si la catégorie sélectionnée est déjà dans les filtres
      if (selectedFilters.includes(selectedCategory)) {
        // Si oui, filtrez-la en la retirant de la liste des filtres
        const updatedFilters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(updatedFilters);
      } else {
        // Si non, ajoutez-la à la liste des filtres
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
    useEffect(() => {
      filterItems();
    }, [selectedFilters]);
  
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = data.filter((data) => data.Brand === selectedCategory);
          return temp;
        });
        // Utilisez flat() pour aplatir le tableau de tableaux en un seul tableau
        setfiltereditem(tempItems.flat());
      } else {
        // Si aucun filtre n'est sélectionné, affichez tous les articles
        setfiltereditem([...data]);
      }
    };
return(
    <>
    <div className='all-page-filtre'>
        <div className='Button-containeur'>
            <div className='Button-containeur1'>
               <h1>FILTER BY Brand</h1>
               {data.map((item,index)=>( 
                  <button 
                  onClick={()=>handleclickfilter(item.Brand)}
                  className={'button $ {selectedFilters?.includes(item.Brand) ? "active":""}'}
                  >
                    {item.Brand}
                  </button>
                  
                
               ))}

            </div>
          

        </div>
        <div className='items-containeur'>
        <div className='image-containeur'>
      {filtereditem.map((item, index) => (
        <div key={index} className="element-image">
          <img src={item.image} alt={`Image {index + 1}`} className='image' />
          <div className='ligne3'></div>
          <h3>{item.titre}</h3>
          <p>{item.paragraphe}</p>
          <p className='price'>{item.price}</p>
          <p className='discount'>{item.discount}</p>
          
        </div>
      ))}
      </div>
            </div>

    </div>
    
    
    
    
    
    </>


)
}
export default Filter;