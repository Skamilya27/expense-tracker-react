import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Header() {

  const { IdToken, setIdToken } = useContext(AuthContext);

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
            <Link to="/expenses" id="link">
              Expenses
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
            {!IdToken ? <Link to="/auth" id="link">
              LOGIN
            </Link> : 
            <div onClick={() => {
              localStorage.removeItem("idToken");
              localStorage.removeItem("userEmail");
              setIdToken(null);
            }}>
              LOGOUT
              </div>
            }
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
