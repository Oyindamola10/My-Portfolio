import React from "react";
import SectionTop from "../shared/SectionTop";
import "./About.css";
import logo from "../../images/logo3.png";

const About = () => {
  return (
    <>
      <div className="aboutCon">
        <SectionTop
          title="ABOUT"
          shortDec="About Me"
          text="My name is Samiat Adegbenro,full-stack web developer passionate about creating dynamic, responsive, and user-friendly web applications."
        />

        <hr className="rounded" />
      </div>
      <div>
        <div className="parentCon">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={logo} id="theImg3" alt="" />
            </div>
            <div className='col-sm-12 col-md-6' id='otherPart'>
                   <div>
                     <h4 id="theHeader">Hi There</h4>
                     <p id="headName">My Name is Adegebnro Samiat a full stack web developer with expertise in <br />both front-end and back-end technologies. I specialize in creating responsive, user-friendly web applications using React, Node.js, and various databases. My passion is solving complex problems and delivering efficient, scalable solutions. 
                     I'm excited to bring my skills and experience to new challenges and projects.</p>
                   </div>
                   <div>
                    <h5 id="thename">Name:</h5>
                    <p id="myname">Adegbenro Samiat</p>
                    <h5 id="theemail">Email:</h5>
                    <p id="myemail">samiatadegbenro@gmail.com</p>
                    <h5 id="thephone">Phone:</h5>
                    <p id="myphone">+234 816 717 4601</p>
                    <h5 id="theLinked">LinkedIn:</h5>
                    <p id="myLinked"><a href="https://www.linkedin.com/in/samiat-adegbenro-27392b224/">Adegbenro Samiat</a></p>
                   </div>
                    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
