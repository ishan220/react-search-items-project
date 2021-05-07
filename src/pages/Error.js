import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context.js'
const Error = () => {
 const {setnavShow}=useGlobalContext();
 setnavShow(false);
  return (
    <div>
      <h2>This is Dead End</h2>
      <button><Link to="/">Back To Home
    </Link></button>
    </div>
  )
}

export default Error
