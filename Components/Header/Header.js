import React from "react";
import logo from "../../Assests/Logo1.jpg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./Header.css";
const Header = (props) => {
  const { currentUser, logout } = useAuth();
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <NavLink className="navbar-brand logo_h" to="/">
              <img
                src={logo}
                alt=""
                style={{ height: "80px", width: "160px" }}
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    exact
                    activeStyle={{
                      color: "#1f57f3ec",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fas fa-home mr-1" />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/about"
                    activeStyle={{
                      color: "#1f57f3ec",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fas fa-address-card mr-1" /> About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/search"
                    activeStyle={{
                      color: "#1f57f3ec",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fas fa-search mr-1" /> Search Recipe
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/recipes"
                    activeStyle={{
                      color: "#1f57f3ec",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fas fa-pizza-slice mr-1" /> Recipes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/post"
                    activeStyle={{
                      color: "#1f57f3ec",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fas fa-edit mr-1" /> Write Recipe
                  </NavLink>
                </li>
                {currentUser ? (
                  <li className="nav-item">
                    <div className="headerUserLink">
                      <div className="btn-group">
                        <p
                          className=" dropdown-toggle dropdown"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-user-alt mr-1" />
                          {currentUser.displayName}
                        </p>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <NavLink
                            className="dropdown-item"
                            to="/updateProfile"
                          >
                            <i className="fas fa-user-cog mr-1" />
                            Update Profile
                          </NavLink>
                          <button className="dropdown-item" onClick={logout}>
                            <i className="fas fa-sign-out-alt mr-1" />
                            Log out
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      activeStyle={{
                        color: "#1f57f3ec",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fas fa-sign-in-alt mr-1" /> Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
