import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const { setIsLogin } = useContext(AuthContext);

    const handleChange = (e) => {
        e.preventDefault();
        const {placeholder, value} = e.target;
        setUserData({...userData, [placeholder]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem('userEmail', userData.email)

        try {
          setIsLoading(true);
          const res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcEPtUojmINWD51NeqF0UljCHCjEc2MxM",
            {
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
            }
          );

          if(res.status == 200) console.log(res.status)
          toast("User Logged-In successfully👍");
          navigate("/");
        }
        catch(e) {
          toast(e.response.data.error.message);
        }
        setIsLoading(false);
        document.querySelector("form").reset();
    };


  return (
    <div>
      <h1 className="display-1 border-3 border-dark m-auto my-3 w-25 p-3 mt-10 text-center">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="form m-auto my-3 w-25 p-3 shadow-lg rounded-3 bg-gradient"
        style={{ backgroundColor:"#245296" ,color:"white", fontWeight:"bold" }}
      >
        <div>
          <label  className="d-flex justify-content-center">E-mail Address</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            placeholder="Enter Your Email Here"
            required
          />

          
          <Form.Text className="d-flex justify-content-center" style={{color: "white"}}>
            We'll never share your email with anyone else.
          </Form.Text>
        </div>

        <div className="mt-2">
          <label className="d-flex justify-content-center">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            placeholder="Enter Your Password Here"
            required
          />
        </div>

        <div className="d-flex justify-content-center mt-2">
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
            {isLoading ? "Wait I'm Working🏃..." : "Login"}
          </button>

          <button
            type="submit"
            className="btn bg-gradient"
            onClick={() => setIsLogin(false)}
            style={{
              backgroundColor: "#d3dce8",
              color: "black",
              fontWeight: "bold",
            }}>
            New User?
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
