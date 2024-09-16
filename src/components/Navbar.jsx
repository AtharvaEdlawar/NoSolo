import React from 'react';
import './component.css'
import { useState } from 'react';

export default function Navbar() {

  const [Navbar,setNavbar] = useState(false);
  const toggle =()=>{
    setNavbar(!Navbar);
  }
  return (
    <>
      <div className="navBar">
        <div className='leftDiv'>
        <p className='halloween'>Halloween4.0</p>
        <img className='boneCrossImg' src={Navbar?"src/components/boneCross.png":"src/components/gone.png"} alt="" onClick={toggle} />
        </div>
        <div className='rightDiv'>
        <a className={Navbar ?"navElementActive":"navElement"} href="">Cosplayers</a>
        <a className={Navbar ?"navElementActive":"navElement"} href="">Artist</a>
        <a className={Navbar ?"navElementActive":"navElement"} href="">About</a>
        <a className={Navbar ?"navElementActive":"navElement"} href="">Tickets</a>
        </div>
      </div>
    </>
  )
}
