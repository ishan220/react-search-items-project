import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [navshow,setnavShow]=useState(true);
  const[loading,setLoading]=useState(true);
  const[items,setItems]=useState();
  const getItems= async(searchterm="") => {
    setLoading(true);
    try{
      const data=await fetch(`${url}${searchterm}`);
    const jsondata = await data.json();
     const {drinks}  = jsondata;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        }
        )
        setItems(newCocktails);
        console.log(newCocktails);
      }
      else{
      setItems();
    }
      setLoading(false);
    }
    catch(error)
    {
      console.log(error);
    }
    
  }
  return <AppContext.Provider value={{navshow,setnavShow,setItems,loading,getItems,items,setLoading}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
