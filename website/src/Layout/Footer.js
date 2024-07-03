import React from 'react';

const Footer = () => {
  return (
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
  );
}

export default Footer;
