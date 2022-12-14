import React from 'react'
import { Carrito } from './Carrito'
import {Link} from 'react-router-dom'
function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className='text-decoration-none'><span className="navbar-brand">Toyota Shop</span></Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
         <Link to="/category/sedan " className='text-decoration-none'><span className="nav-link " aria-current="page">SEDAN</span></Link> 
        </li>
        <li className="nav-item">
         <Link to="/category/suv" className='text-decoration-none'> <span className="nav-link " aria-current="page">SUV</span></Link> 
        </li>
        <li className="nav-item">
        <Link to="/category/pickup" className='text-decoration-none'> <span className="nav-link " aria-current="page">PICKUP</span></Link>  
        </li>
        <li className="nav-item">
         <Link to="/category/hibrido" className='text-decoration-none'><span className="nav-link" >Híbrido</span></Link> 
        </li>
        
      </ul>
      <Link to='/cart' className='text-decoration-none'><span className="navbar-brand "><Carrito/></span></Link>
    </div>
  </div>
</nav>
  )
}
export default Menu