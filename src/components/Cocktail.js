import React, { useEffect } from 'react'
import {Link,useParams } from 'react-router-dom'

const Cocktail = () => {
  // const {id}=useParams();
  // useEffect(()=>
  // {
  //   setLoading(true);
  //   aysnc function getCocktail () {
  //     try
  //     {
  //     const response=await fetch(`url${id}`);
  //     const data=await response.json();
  //     if(data.drinks){
  //         const{strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions,strIngredients1,strIngredients2,strIngredients3,strIngredients4,strIngredients5}=data.drinks[0];
  //         const Ingredients=[strIngredients1,strIngredients2,strIngredients3,strIngredients4,strIngredients5]
  //         const newCocktail={name,image,info,category,glass,instructions,Ingredients}
  //          setCocktail(newCocktail);
  //                     }
  //     else
  //      {
  //        setCocktail(null);
  //      }
  //     }
  //   catch(error)
  //  {
  // console.log(error);
  //  }

  //   }
  // },
  // [id]);
  // return (
  //   <div className='item-specifics'>
      
  //   </div>
  // )
};

export default Cocktail
