import React from "react";
import "./Nav.css";
import CartContext from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const {
    number,
    inputs,
    setInputs,
    search
  } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <div className="mainNav">
          <div className="nav">
            <div>WAY2DOOR APP</div>
            <div id="loginSignup">
              <ul>
                <li>
                  <Link to="/login">
                    <i className="fa-solid fa-right-to-bracket"></i>Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <i className="fa-solid fa-paper-plane"></i>SignIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="headerLogo">
            <Link to='/'><img src="logo.png" alt="" /></Link>
          </div>
          <div className="searchBar" >
            <form onSubmit={search}>
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search Here.."
                value={inputs}
                onChange={(event) => setInputs(event.target.value)}
              />
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </form>
          </div>
          <div className="headerIcons">
            <div className="cart">
              <Link to="/Cart">
                <i className="fa-brands fa-opencart">
                  <span id="num">{number}</span>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
