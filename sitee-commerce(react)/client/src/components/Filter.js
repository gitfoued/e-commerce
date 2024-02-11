
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
    </>


)
}
export default Filter;