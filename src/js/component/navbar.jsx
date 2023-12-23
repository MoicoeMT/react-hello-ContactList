import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="navbar mb-5 navbar-expand-lg bg-dark">
      <div className="container-fluid d-flex justify-content-between mx-4">
        <div className="d-flex justify-content-between w-100">
          <Link to={"/"} className="navbar-brand text-light">
          <i className="fa-solid fa-address-book fs-4 px-2"></i>  Contacts
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active text-light"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to={"/contact"}
                  className="nav-link text-light"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
