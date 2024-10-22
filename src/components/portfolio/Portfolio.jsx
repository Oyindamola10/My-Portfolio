import React from 'react'
import "./Portfolio.css"
const Portfolio = () => {
  return (
    <div className='myPort'>
        <h1 className='portTxt'>Portfolio <br />Showcase</h1>
        <p className='portP'>I'm a  full-stack web developer developer passionate about creating dynamic and responsive
          websites with <br /> more than a year experience.</p>
         <div className='myWorks'>
         <button id='myWork1'><a href="" id='workLink'>All Works</a></button>
         <button id='myWork2'><a href="" id='workLink'>Designs</a></button>
         <button id='myWork3'><a href="" id='workLink'>Web</a></button>
         </div>

         <div>
          
         </div>
          <hr  className='rounded1'/>
         
    </div>
  )
}

export default Portfolio