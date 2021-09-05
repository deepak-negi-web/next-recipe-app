import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import { useAuth } from "../../contexts/authContext";
import { StyledHeader } from "./styles.js";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <Link className="navbar-brand logo_h" href="/">
                <img
                  src="/Assests/Logo1.jpg"
                  alt=""
                  style={{ height: "80px", width: "160px" }}
                />
              </Link>
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
                    <Link href="/">
                      <a
                        className={
                          pathname === "/" ? "nav-link activeLink" : "nav-link"
                        }
                      >
                        <i className="fas fa-home mr-1" />
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a
                        className={
                          pathname === "/about"
                            ? "nav-link activeLink"
                            : "nav-link"
                        }
                      >
                        <i className="fas fa-address-card mr-2" />
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/search">
                      <a
                        className={
                          pathname === "/search"
                            ? "nav-link activeLink"
                            : "nav-link"
                        }
                      >
                        <i className="fas fa-search mr-1" /> Search Recipe
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/recipes">
                      <a
                        className={
                          pathname === "/recipes"
                            ? "nav-link activeLink"
                            : "nav-link"
                        }
                      >
                        <i className="fas fa-pizza-slice mr-1" /> Recipes
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/post">
                      <a
                        className={
                          pathname === "/post"
                            ? "nav-link activeLink"
                            : "nav-link"
                        }
                      >
                        <i className="fas fa-edit mr-1" /> Write Recipe
                      </a>
                    </Link>
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
                            <Link
                              className="dropdown-item"
                              href="/updateProfile"
                            >
                              <a
                                className={
                                  pathname === "/updateProfile"
                                    ? "nav-link activeLink"
                                    : "nav-link"
                                }
                              >
                                <i className="fas fa-user-cog mr-1" />
                                Update Profile
                              </a>
                            </Link>
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
                      <Link href="/api/auth/">
                        <a
                          className={
                            pathname === "/login"
                              ? "nav-link activeLink"
                              : "nav-link"
                          }
                        >
                          <i className="fas fa-sign-in-alt mr-1" /> Login
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;
