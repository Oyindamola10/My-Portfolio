import React from 'react'
import "./Home.css"
import logo from "../../images/logo3.png"
import Serv from '../serv/Serv'
import About from '../about/About'
import Skills from '../skills/Skills'
import Portfolio from '../portfolio/Portfolio'

const Home = () => {
  return (
    <>
       <div className='parentCon'>
          <div className='row'>
             <div className='col-sm-12 md-6'> 
                 <div className='myIcons'>
                  <a href="" id='myIcon'><i className='fab fa-facebook-f'></i></a>
                  <a href="" id='myIcon'><i className='fab fa-github'></i></a>
                  <a href="" id='myIcon'><i className="fab fa-twitter"></i></a>
                  <a href="" id='myIcon'><i className='fab fa-pinterest-p'></i></a>
                  <a href="" id='myIcon'><i className='fab fa-instagram'></i></a>
                 </div>
                  <div>
                     <h1 id='myName'>I Am Samiat Adegbenro</h1>
                     <p id='myExp' >I'm Samiat,  a full-stack web developer specializing in crafting dynamic and scalable web solutions. I excel in <br/> frontend technologies, along with backend expertise. <br/> Let's create something great together!
                     </p>
                      <div className='btn1'>
                        <button id='theBtn'><a href="/portfolio" id='portLink'>My Porfolio</a></button>
                      </div>
                  </div>
                 
             </div>
             <div className='col-sm-12 md-6'>
                  <div>
                     <img src={logo} alt=""  id='theImg2'/>
                  </div>
             </div>
          </div>
       </div>
       <Serv></Serv>
       <About></About>
       <Skills></Skills>
       <Portfolio></Portfolio>
    </>
  )
}

export default Home