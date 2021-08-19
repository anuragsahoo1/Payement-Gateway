import React,{useState} from 'react'
import { Button } from './Button'
import '../HeroSection.css'
import {Link} from 'react-router-dom'
import Bank from './pages/bank'
function HeroSection() {
  
 
    return (
        <div className='hero-container'>
        
             <h1>The Time To Act Is Now</h1>
             <p>It is about making a Difference</p>
             <div className="hero-btns">              
       <button
       className='Donate-btns'>
          <Link to='/Donate'  > Donate </Link>
       </button>
       </div>
     </div>
        
    )
}

export default HeroSection
