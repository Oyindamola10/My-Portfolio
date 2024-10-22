import React from "react";
import "./Serv.css";
import SectionTop from "../shared/SectionTop";
const Serv = () => {
  return (
    <>
      <div className="theBody1">
        {/* top sec */}
        <SectionTop
          title="SERVICES"
          shortDec="My Services"
          text="I provide comprehensive services including website and web application development and backend programming."
        />
         <hr  className="rounded"/>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body " id="cardBody1">
                <a href="" id='gitHub'><i className='fab fa-github'></i></a>
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body" id="cardBody2">
                <a href="" id="gitHub"><i className="fa fa-database"></i></a>
                <h5 className="card-title">Backend Development</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body" id="cardBody3">
                <a href="" id="gitHub"><i className="fa fa-cogs"></i></a>
                <h5 className="card-title">Hosting/Deployment Support</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serv;
