import React from "react";
import "../styles/cart.css"


export default function Cart()
{
   
    return(
        
        <div className="cart-container">
        <div className="container">
        <h2 className="cartitle">Cart</h2>
        <h3  className="cost">Cost</h3>
        </div>
        <h3>count</h3>
        <hr></hr>
        <div className="setbuttons">
        <button>Checkout</button>
        <button>Clear Cart</button>
        </div>
        </div>
        
    )
}