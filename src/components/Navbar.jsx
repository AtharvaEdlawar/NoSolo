import React from 'react';
import './component.css'

export default function Navbar() {
  return (
    <>
      <div className="navBar">
        <p className='halloween'>Halloween4.0</p>
        <a className='navElement' href="">Cosplayers</a>
        <a className='navElement' href="">Artist</a>
        <a className='navElement' href="">About</a>
        <a className='navElement' href="">Tickets</a>
      </div>
    </>
  );
}
