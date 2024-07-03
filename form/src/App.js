import React from 'react';
import './App.css';

function App() {
  
     
  return (
    <div>
    <div className="form-container">
      <form className="form">

        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
    </div>
 
  );
}
   

export default App;
