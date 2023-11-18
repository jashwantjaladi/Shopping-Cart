import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar';
import App from './App';
import Products from './Products';
import Cart from './Cart';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css"


const Applayout=()=>
{
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[{
      path: "/",
      element: <App />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
        path :"cart",
        element:<Cart/>
    },
  ],},]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
