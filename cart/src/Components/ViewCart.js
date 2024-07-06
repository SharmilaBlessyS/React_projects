import React, { useState, useEffect, useContext } from "react";
import { cartContext } from '../App'; 
import './ViewCart.css';

function ViewCart() {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);
    setTotal(totalAmount);
  }, [cart]);

  

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.images} alt="product" />
            </div>
            <div className="cart-product-details">
              <h3>{product.title}</h3>
              <p>Price Rs: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h4 className="cart-amt">Total amount Rs: {total}</h4>
    </>
  );
}

export default ViewCart;
