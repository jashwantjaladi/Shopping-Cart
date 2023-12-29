import React from "react";
import { useState } from "react";
import Card from "./Card";
import "../styles/card.css"
import "../styles/Product.css"


export default function Products()
{
    const [getdata,setData]= useState([])
    React.useEffect(function()
    {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setData(data))
    },[])
    
   

if(!getdata) return <div>loading...</div>
const cardArray=getdata.map((item)=><Card key={item.id} image={item.image} title={item.title} price={item.price} description={item.description}/>)

 return(
    <div className="cardArray">{cardArray}</div>
) 
}