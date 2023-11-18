import React from "react";
import "./cart.css"

export default function Cart()
{
    return(
        
        <div className="cart-container">
        <div className="container">
        <h2 className="cartitle">Cart</h2>
        <h3  className="cost">Cost</h3>
        </div>
        
        <hr></hr>
        <div className="setbuttons">
        <button>Checkout</button>
        <button>Clear Cart</button>
        </div>
        </div>
        
    )
}