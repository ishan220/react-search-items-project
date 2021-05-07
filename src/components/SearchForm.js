import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{items,setItems,getItems}=useGlobalContext();
  const searchItems= (e) => {
    console.log(e.target.value);
    getItems(e.target.value);
  }
  return (
   <div className='search-box'>
      <form >
        <label htmlFor="search">Search for your favourite cocktail</label>
        <input type='search' onChange={(e)=>searchItems(e)} placeholder='search for item...'/>
      </form>
      </div>
  )
}

export default SearchForm
