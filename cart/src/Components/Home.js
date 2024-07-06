import React,{useState} from "react";
import data from '../assets/Product.json';
import Product from './Product';
import './Home.css';
function Home() {
    
    const[products] = useState(data);
    return (
        <div className="product-container">
            {products.map((product)=>(
               <Product key={product.id} product = {product} ></Product>
            ))}
            
        </div>
    );
}

export default Home;
