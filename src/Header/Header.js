import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className=" d-flex p-2 justify-content-around header">
        <div className=" d-flex justify-content-between gap-4">
          <button className="btn">
            <Link to="/" id="link">
              Home
            </Link>
          </button>
          <button className="btn">
            <Link to="/store" id="link">
              Store
            </Link>
          </button>
          <button className="btn">
            <Link to="/about" id="link">
              About
            </Link>
          </button>
          <button className="btn">
            <Link to="/ContactUs" id="link">
              Contact Us
            </Link>
          </button>
          <button className="btn">
            <Link to="/auth" id="link">
              LOGIN
            </Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
