import React from 'react'
import Navigation from './components/navigation/Navigation';
import {Route, Routes} from "react-router-dom"
import "./App.css"
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Serv from './components/serv/Serv';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import logo from './images/logo1.png'

const App = () => {
  return (
    <>
    
     <Navigation/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/services' element={<Serv/>}/>
         <Route path='/portfolio' element={<Portfolio/>}/>
     </Routes>
   

     <footer className='TheFoot'>
          <div className='footCon'>
             <img src={logo} alt='' id='footImg'/>
             <p id='footTxt'>Crafting digital experiences that stand out. Expertise in full-stack development, responsive design, and <br/>ongoing support. Let's bring your vision to life!</p>
             <div className='footIcons'>
                  <a href="" id='myIcon'><i className='fab fa-facebook-f'></i></a>
                  <a href="" id='myIcon'><i className='fab fa-github'></i></a>
                  <a href="" id='myIcon'><i className="fab fa-twitter"></i></a>
                  <a href="" id='myIcon'><i className='fab fa-pinterest-p'></i></a>
                  <a href="" id='myIcon'><i className='fab fa-instagram'></i></a>
             </div>
              <p id='footTxt1'>Copyright   <i className="fa fa-copyright"></i> 2024 Samiat All Rights Reserved.</p>
          </div>
     </footer>
    </>
  )
}

export default App
