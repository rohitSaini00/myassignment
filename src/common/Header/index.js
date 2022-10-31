import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import { images } from '../../assest/images'
import { AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
const AppHeader = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
       <NavLink to="/"><img src={images.logo} className="img-responsive" alt=""/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-links-1">
              <li className="nav-item">
                <NavLink to = "/">Home</NavLink>
              </li>
            <li className="navbar-dropdown-1">
                <NavLink to = "/products">Products</NavLink>
                <div className="dropdown-1">
                  <NavLink to ="/products">Clothing</NavLink>
                  <NavLink to ="/products">Footwear</NavLink>
                  <NavLink to ="/products">Accessories</NavLink>
                  <NavLink to ="/products">Home Décor</NavLink>
                  <NavLink to ="/products">Kids</NavLink>
            </div>
              </li>
             <li className="nav-item">
                <NavLink to ="about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to = "contact">Contact Us</NavLink>
              </li>
              </ul>
        <ul className="d-flex cart navbar-links-2">
       <li className="navbar-dropdown-2">
        <NavLink to = "/profile"><AiOutlineUserAdd/></NavLink>
        <div className="dropdown-2">
        <NavLink>Profile</NavLink>
        <NavLink to ="/login">Login/Signin</NavLink>
        </div>
          </li>
          <NavLink to = "/cart"><AiOutlineShoppingCart/></NavLink> 
          </ul>
         </div>
        </div>
      </nav>
  </>
  )
}
export default AppHeader