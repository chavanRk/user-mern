import React from 'react'
import './About.css';
import Particle from './Particle';

export const About = () => {
  return (
    <div className='about'>
        <Particle/>
        <div className="aboutbox">
          <h1 className='aboutheading'>MERN CRUD APPLICATION </h1>
          <p className='aboutpara'>This is a CRUD application using MERN stack. User can perform all crud operations of create, user, read data, update/edit and delete. This project contains various css effects, animations, dark/light mode.</p>
          <div className="aboutflex">
            <div className="linkedin aboutflexitems"><i className=" abouti fa-brands fa-linkedin"></i><a href="linkedin.com/in/rohit-chavan-bab2201b4" className='abouta' target='_blank'>Rohitkumar Chavan</a></div>
            <div className="github aboutflexitems"><i className=" abouti fa-brands fa-github"></i><a href="https://github.com/chavanRk" className='abouta' target='_blank'>chavanRk</a></div>
            <div className="email aboutflexitems"><i className=" abouti fa-solid fa-envelope"></i>chavanrohit413@gmail.com</div>
            <div className="contactnum aboutflexitems"><i className=" abouti fa-solid fa-phone"></i>8600842880</div>
          </div>
          <div className="aboutend">
            <p>Thank you, I hope you liked my project</p>
            <p className='aboutbutton'>My Info</p>
          </div>
        </div>
    </div>
  )
}
