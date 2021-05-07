import React from 'react'
import {useGlobalContext} from '../context.js'
const About = () => {
  const {setnavShow}=useGlobalContext();
 setnavShow(false);
  return (
    <div>
      <h2>about page</h2>
    </div>
  )
}

export default About
