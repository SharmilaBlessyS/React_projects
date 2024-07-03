import React from 'react';
import './App.css';
import ComponentOne from './ComponentOne.js'
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentOne name="Sharmila Blessy" age={20} isMarried={false}></ComponentOne>
      </header>
    </div>
  );
};

export default App;
