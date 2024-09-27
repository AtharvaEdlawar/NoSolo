import React from 'react';
import './component.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [Navbar,setNavbar] = useState(false);
  const toggle =()=>{
    setNavbar(!Navbar);
  }
  return (
    <>
      <div className="navBar">
        <div className='leftDiv'>
        <Link className='title' to={"/"}>Halloween4.0</Link>
        <img className='boneCrossImg' src={Navbar?"src/components/images/boneCross.png":"src/components/images/gone.png"} alt="" onClick={toggle} />
        </div>
        <div className='rightDiv'>
        <Link style={{textDecoration:'none'}} className={Navbar ?"navElementActive":"navElement"} to="/cosplayers">Cosplayers</Link>
        <Link style={{textDecoration:'none'}} className={Navbar ?"navElementActive":"navElement"} to="/artist">Artist</Link>
        <Link style={{textDecoration:'none'}} className={Navbar ?"navElementActive":"navElement"} to="/about">About</Link>
        <Link style={{textDecoration:'none'}} className={Navbar ?"navElementActive":"navElement"} to="/tickets">Tickets</Link>
        </div>
      </div>
    </>
  )
}
