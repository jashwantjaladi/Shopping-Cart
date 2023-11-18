import React from "react"
import { Link } from "react-router-dom"

export default function Navbar()
{
    return(
        <div className="header">
        <h1 className="heading">FAKE STORE</h1>
        <div className="buttons">
        <Link to="/"><button>HOME</button></Link>
        <Link to="products"><button>PRODUCTS</button></Link>
        <Link to="cart"><button>CART</button></Link>
        </div>
        </div>
    )
}
