import react, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { brand_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Header = () => {
  const [islogin, setislogin] = useState(false);

  const Usercontext = useContext(UserContext);
  const { name } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://ik.imagekit.io/acrrubsd0/Untitled%20design.png?updatedAt=1770381393453"
        />
      </div>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="search the restaurant"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <Link to="/restaurant">
            <li className="list">Home</li>
          </Link>

          <Link to="/about">
            <li className="list">About Us</li>
          </Link>

          <Link to="/contact">
            <li className="list">Contact Us</li>
          </Link>

          <Link to="/cart">
            <li className="list">Cart</li>
          </Link>

          {islogin ? (
            <li
              className="list"
              onClick={() => {
                setislogin(!islogin);
              }}
            >
              login
            </li>
          ) : (
            <li
              className="list"
              onClick={() => {
                setislogin(!islogin);
              }}
            >
              logout
            </li>
          )}

          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
