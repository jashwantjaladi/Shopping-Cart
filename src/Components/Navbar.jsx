import React from "react"
import { Link } from "react-router-dom"
import { HouseSimple, ShoppingCart } from "phosphor-react"



export default function Navbar(props)
{
    const [cartItems, setCartItems]=React.useState([])
    return(
        <div className="header">
        <h1 className="heading">FAKE STORE</h1>
        <div className="buttons">
        <Link to="/"><button><HouseSimple/></button></Link>
        <Link to="products"><button>Products</button></Link>
        <Link to="cart"><button><ShoppingCart/></button></Link>
        <span>{cartItems.length}</span>
       
        </div>
        </div>
    )
}
