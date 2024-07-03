import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
    <div className='d-flex justify-content-between p-5 text-white bg-dark'>
      <h1 className='text-white'>PetLover</h1>
      <ul type='none' className='d-flex justify-content-between w-25 h5 '>
      <li>
          <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none', color:'white' }}>About</Link>
        </li>
        <li>
          <Link to="/service" style={{ textDecoration: 'none' , color:'white'}}>Service</Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: 'none' , color:'white' }}>Contact</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Header;
