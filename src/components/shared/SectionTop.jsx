import React from 'react'
import "./SectionTop.css"

const SectionTop = ({title, shortDec, text}) => {
    
    
  return (
    <div className='parent'>
        <p id='theTitle'>{title}</p>
        <h2 id='theShort'>{shortDec}</h2>
        <p id='theTxt'>{text}</p>
        
    </div>
  )
}

export default SectionTop