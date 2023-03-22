import React, { useContext, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { setisLogin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", userData.email);

    if (userData.confirmpassword !== userData.password) {
      return toast("Your password is not matching🙅");
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcEPtUojmINWD51NeqF0UljCHCjEc2MxM",
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      );

      if (res.status === 200) {toast("Successful😊")
      setisLogin(true) }
      else toast(res.data.error);
    } catch (e) {
      console.log(e.response.data.error);
      toast(e.response.data.error.message);
    }

    setIsLoading(false);
    document.querySelector("form").reset();
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <h1 className="display-1 border-3 border-dark m-auto my-3 w-25 p-3 mt-10 text-center">
        Sign-Up
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
          <label className="d-flex justify-content-center">
            E-mail Address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            placeholder="Enter Your Email Here"
            required
          />

          <Form.Text
            className="d-flex justify-content-center"
            style={{ color: "white" }}
          >
            We'll never share your email with anyone else.
          </Form.Text>
        </div>

        <div className="mt-2">
          <label className="d-flex justify-content-center">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            placeholder="Enter Your Password Here"
            required
          />
        </div>

        <div className="mt-2">
          <label className="d-flex justify-content-center">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmpassword"
            onChange={handleChange}
            placeholder="Re-Enter Your Password"
            required
          />
        </div>

        <div className="d-flex justify-content-center mt-2 gap-3">
          <button
            type="submit"
            className="btn bg-gradient"
            style={{
              backgroundColor: "#d3dce8",
              color: "black",
              fontWeight: "bold",
            }}
            disabled={isLoading}
          >
            {isLoading ? "Wait I'm Working🏃..." : "Create Account"}
          </button>

          <button
            type="submit"
            className="btn bg-gradient"
            onClick={() => setisLogin(true)}
            style={{
              backgroundColor: "#d3dce8",
              color: "black",
              fontWeight: "bold",
            }}>
            Already having an account?🤔
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
