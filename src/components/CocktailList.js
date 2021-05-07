import React, { useEffect } from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import {Link} from 'react-router-dom'
const CocktailList = () => {
  const {items,getItems,loading,setLoading}=useGlobalContext();
  
  useEffect(()=>{
    setLoading(true);
   getItems("");
  },[]);

    if(loading)
    {
    return <Loading/>;
    }
    else
    {
  return (
    <div className='items'>
      {items?items.map((item,index)=>{
       return (<div className='item'>
       <h3>{item.name}</h3>
       <img src={item.image}/>
       <p>{item.info}</p>
       <button><Link to={`/cocktail/${item.id}`}>more details</Link></button>
       </div>);
      }
      )
      :<div><p>No items to show</p></div>}
    </div>
  )
    }
    
}

export default CocktailList
