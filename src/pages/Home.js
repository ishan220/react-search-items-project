import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import {useGlobalContext} from '../context.js'
const Home = () => {
  const {setnavShow}=useGlobalContext();
  setnavShow(true);
  return (
    <div className='home-container'>
      {<SearchForm/>}
      {<CocktailList/>}
    </div>
  )
}

export default Home
