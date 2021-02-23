import React from 'react'
// import { BrowserRouter as Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import Button from './Button'

export default function Navbar({ activeSection }) {
  if(activeSection === undefined) { activeSection = "about" }
  
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav id="navbar" className="relative full-w bg-grape-700 text-center pb-6 px-8 md:w-1/5 md:fixed">
      <h1 className="font-siteTitle text-center text-3xl leading-loose mb-4 pt-10">
        <Link to="/">Curious Explorations: Portfolio</Link>
      </h1>
      <img id="profilePhoto" src="./images/photo.jpg" width="200" height="200" alt="Angel Knight" className="rounded-full my-4 inline-block" />
      <div className="flex flex-col relative">
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} onSetActive={(e) => handleSetActive(e)}>
          <Button type="button">About</Button>
        </Link>
        <Link to="gallery" activeClass="active" spy={true} smooth={true} duration={500} onSetActive={(e) => handleSetActive(e)}>
          <Button type="button">Gallery</Button>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} onSetActive={(e) => handleSetActive(e)}>
          <Button type="button">Contact</Button>
        </Link>
      </div>
      <div className="text-center w-full">
        <Button url="https://github.com/skelliebunnie/" target="_blank" type="icon"><i className="fab fa-github"></i></Button>
        <Button url="https://www.linkedin.com/in/skelliebunnie/" target="_blank" type="icon"><i className="fab fa-linkedin"></i></Button>
        <Button url="https://discord.com/users/720151814150029353" target="_blank" type="icon"><i className="fab fa-discord"></i></Button>
      </div>
    </nav>
  )
}
