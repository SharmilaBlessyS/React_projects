import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    
    <div>
      <div className='footer-top'>
        <div className='first'>
          <h1>PetLover</h1>
          <p>Ipsum amet sed vero et lorem stet eos Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem ea<br></br> lorem sed, amet stet sit sea ea diam tempor kasd kasd. Diam nonumy etsit tempor ut sed diam sed et ea<br></br>Ipsum amet sed vero et lorem stet eos Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem ea<br></br> lorem sed, amet stet sit sea ea diam tempor kasd kasd. Diam nonumy etsit tempor ut sed diam sed et ea</p>
        </div>
        <div className='second'>
          <h5>Get In Touch</h5>
          <div className='icons'>
          <p><i className="fa-solid fa-location-dot"></i>123 Street, New York, USA</p>
          <p><i className="fa-solid fa-phone"></i>+012 345 67890</p>
          <p><i className="fa-solid fa-envelope"></i>mail@domain.com</p>
          </div>
        </div>
        <div className='third'>
        <h5>Popular Links</h5>
          
           
          <p><i className="fa-solid fa-angle-right"></i>Home</p>
          <p><i className="fa-solid fa-angle-right"></i>About</p>
          <p><i className="fa-solid fa-angle-right"></i>Service</p>
          <p><i className="fa-solid fa-angle-right"></i>Contact</p>
          
        </div>
        <div className='four'>
        <h5>News Letter</h5>
        <input type="text" placeholder='Enter your name'></input>
        <input type="email" placeholder='Enter your email'></input>
        <button>Submit Now</button>
        </div>
      </div>

      <div className='d-flex justify-content-between p-5 text-white bg-dark'>
      <h5>© Your Site Name. All Rights Reserved. Designed by HTML Codex</h5>
      <ul type='none' className='d-flex justify-content-between w-25 h5 '>
      <li>
          <p style={{ textDecoration: 'none', color:'white' ,cursor:'pointer'}}>Privacy</p>
        </li>
        <li>
        <p style={{ textDecoration: 'none', color:'white' ,cursor:'pointer'}}>Terms</p>
        </li>
        <li>
        <p style={{ textDecoration: 'none' , color:'white',cursor:'pointer' }}>FAQs</p>
        </li>
        <li>
        <p style={{ textDecoration: 'none' , color:'white',cursor:'pointer' }}>Help</p>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Footer;
