import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <h1>Contact For <span>Any Query</span></h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
