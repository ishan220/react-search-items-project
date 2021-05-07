import React from 'react'
import {useGlobalContext} from '../context.js';
const Loading = () => {
    const {loading}=useGlobalContext();
  
 return (
  <div className="loader">
      {loading&&<div><h1>Loading...</h1></div>}
  </div>
 );
}

export default Loading
