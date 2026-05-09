import react from "react";
import ReactDOM from 'react-dom/client';
import { brand_URl } from "../utils/constants";



const Header = ()=>{
    return <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://ik.imagekit.io/acrrubsd0/Untitled%20design.png?updatedAt=1770381393453"
        />
      </div>
    <div className="search-bar">

        <input className="search" type="text" placeholder="search the restaurant" />

    </div>
    <div className="nav-container">
        <ul className="nav-items">
          <li className="list">Home</li>
          <li className="list">About Us</li>
          <li className="list">Contact Us</li>
          <li className="list">Cart</li>
        </ul>
      </div>
     
    </div>
    
}

export default Header;