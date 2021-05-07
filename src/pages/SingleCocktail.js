import React,{useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?s='

const SingleCocktail = () => {
  const {loading,setLoading}=useGlobalContext();
  const {id}=useParams();
  const [cocktail, setCocktail] = React.useState(null);
  useEffect(() =>
  {
    setLoading(true)
    async function getCocktail () {
      try
      {
      const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data=await response.json();
      console.log(data.drinks);
      if(data.drinks){
          const{strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions,strIngredients1,strIngredients2,strIngredients3,strIngredients4,strIngredients5}=data.drinks[0];
          const Ingredients=[strIngredients1,strIngredients2,strIngredients3,strIngredients4,strIngredients5]
          const newCocktail={name,image,info,category,glass,instructions,Ingredients}
           setCocktail(newCocktail);
                      }
      else
       {
         setCocktail(null)
       }
     

      }
    catch(error)
     {
       console.log(error)
     }

       setLoading(false);
    }

    getCocktail()

  },
  [id]);

  if(loading)
  {
    return <Loading/>;
  }
  if(!cocktail)
  return (<div>No items to show</div>)
else{
  return (
    <div className='item-specifics'>
      {cocktail.image&&<div className='item-img'>
          <img src={cocktail.image} alt=""></img>
      </div>}
      
      <div className='item-info'>
        <p><span>Name:</span>
        {cocktail.name}
        </p>
        <p><span>Info:</span>
        {cocktail.info}
        </p>
        <p><span>category:</span>
        {cocktail.category}
        </p>
        <p><span>Glass:</span>
        {cocktail.glass}
        </p>
        <p><span>Instructions:</span>
        {cocktail.instructions}
        </p>
        <p><span>Ingredients</span>
          {cocktail.Ingredients.map((ing)=>{
            return ing?(<span>ing</span>):null;
          })}
        </p>


      </div>
     
     
    </div>
  )
        }
}

export default SingleCocktail
