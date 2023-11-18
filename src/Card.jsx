import React from "react";
import { useState } from "react";

export default function Card(props)
{

    const [count,setCount]=React.useState(0)
    function decrement()
    {
        setCount(count-1)

    }
    function increment()
    {
        setCount(count+1)
    }
  
    return(
        <>
        <div className="cards">
        <img src={props.image} className="cardimage"/>
    
        <h5 className="cardtitle">{props.title}</h5>
        <h6 className="cardprice">{props.price}</h6>
        <p className="carddes">{props.description}</p>
        <div className="counter">
        <button onClick={decrement} className="carddec">-</button>
        <h4 className="cardcount">{count}</h4>
        <button onClick={increment} className="cardinc">+</button>
        </div>
        </div>
        </>
    )
}