import React from "react";

import './Price.css';

function Price(){
    return(
    <div>
        <h4>Pricing Plan</h4>
        <h1>Choose the <span>Best Price</span></h1>
        <div className="serive-price">
            <div className="basic">
                <h3>Basic</h3>
                <div className="text">
                    <p>Feeding</p>
                    <p>Boarding</p>
                    <p>Spa & Grooming</p>
                    <p>Veterinary Medicine</p>
                </div>
            </div>
            <div className="standard">
            <h3>Standard</h3>
            <div className="text">
                    <p>Feeding</p>
                    <p>Boarding</p>
                    <p>Spa & Grooming</p>
                    <p>Veterinary Medicine</p>
                </div>
            </div>
            <div className="premium">
            <h3>Premium</h3>
            <div className="text">
                    <p>Feeding</p>
                    <p>Boarding</p>
                    <p>Spa & Grooming</p>
                    <p>Veterinary Medicine</p>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Price;