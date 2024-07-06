import { createContext } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import ViewCart from './Components/ViewCart';
import './App.css';
import { useState } from "react";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <cartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header cart={cart} />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/ViewCart' element={<ViewCart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
