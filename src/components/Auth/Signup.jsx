import axios from "axios";
import React, { useContext, useState } from "react";
import {} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "../../store/AuthSlicer";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const dispatch = useDispatch()
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setUserData({ ...userData, [placeholder]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.confirmpassword != userData.password)
      return toast("Please check confirm password..");

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbFTk4FsbWksp6ljbfam7dNwA4IyxJujU",
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      );

        toast("User created successfully");
      dispatch(authActions.loginPage());
    } catch (e) {;
        toast(e.response.data.error.message)
    }
    setIsLoading(false);
    document.querySelector("form").reset();
  };

  return (
    <div>
      <h1 className="display-1 border-3 border-dark m-auto my-3 w-25 p-3 mt-10 text-center">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-3 w-25 p-3 shadow-lg rounded-3 bg-gradient"
        style={{
          backgroundColor: "#245296",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <div>
          <label className="d-flex justify-content-center">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            placeholder="email"
            required
          />
        </div>

        <div className=" mt-2">
          <label className="d-flex justify-content-center">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>

        <div className=" mt-2">
          <label className="d-flex justify-content-center">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            placeholder="confirmpassword"
            required
          />
        </div>

        <div className="d-flex justify-content-center mt-2 gap-3">
        
        {isLoading && "Wait I'm Working🏃..."}
        {!isLoading && <input
          type="submit"
          className=" btn btn-secondary"
          value="CREATE ACCOUNT"
        />}

        <button id='btn'
          className=" btn bg-gradient btn-secondary"
          onClick={() => dispatch(authActions.loginPage())}
        >
          Already having account?
        </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
