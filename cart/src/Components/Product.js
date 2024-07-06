import { cartContext } from '../App';
import './Product.css';
import {useContext} from "react";


function Product({ product }) {
    const{cart,setCart} = useContext(cartContext);
  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.images} alt="img" />
      </div>
      <div className="details">
        <h4>{product.title}</h4>
        <p>Price: {product.price}</p>
        {cart.includes(product) ? (
          <button className="btnRemove" onClick={removeCart}>
            Remove from cart
          </button>
        ) : (
          <button onClick={addCart}>Add to cart</button>
        )}
      </div>
    </div>
  );
}

export default Product;
