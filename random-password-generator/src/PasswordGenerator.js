import React, { useState } from 'react';
import './App.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let characters = '';
    if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characters += '0123456789';
    if (symbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let password = '';
    const passwordLength = 8; 
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(password);
  };

 
  return (
    <div className="password-generator">
      <h1>Generate a <span className="highlight">Random Password</span></h1>
      <div className="password-display">
        <input type="text" value={password} readOnly />
      </div>
      <div className="options">
        <label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
          Uppercase
        </label>
        <label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
          Lowercase
        </label>
        <label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
          Numbers
        </label>
        <label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
          Symbols
        </label>
      </div>
      <button className="generate-button" onClick={generatePassword}>
        
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
