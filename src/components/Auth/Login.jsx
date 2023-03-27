import axios from 'axios';
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { authActions } from '../../store/AuthSlicer';

const Login = () => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()


  const navigate = useNavigate()
   const [userData, setUserData] = useState({
     email: "",
     password: "",
   });

    const [isLoading, setIsLoading] = useState(false);
  
   const handleChange = (e) => {
       const { placeholder, value } = e.target;
       setUserData({ ...userData, [placeholder]: value });
  };
     const handleSubmit = async (e) => {
       e.preventDefault();

        try {
          setIsLoading(true);
          const res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbFTk4FsbWksp6ljbfam7dNwA4IyxJujU",
            {
              email: userData.email,
              password: userData.password,
              returnSecureToken: true,
            }
          );
            
          toast("User Login successfully");
          dispatch(authActions.login(res.data.idToken));
        navigate("/VarifyEmail");
        } catch (e) {
          toast(e.response.data.error.message);
        }
        setIsLoading(false);
        document.querySelector("form").reset();
     };

  return (
    <div>
      <h1 className="display-1 border-3 border-dark m-auto my-3 w-25 p-3 mt-10 text-center">Login</h1>
      {/* <div className="m-auto my-3 w-25 p-3 shadow-lg rounded-3 bg-gradient"> */}
        <form
          onSubmit={handleSubmit}
          className="form m-auto my-3 w-25 p-3 shadow-lg rounded-3 bg-gradient"
        style={{ backgroundColor:"#245296" ,color:"white", fontWeight:"bold" }}
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

          <div className="mt-2">
            <label className="d-flex justify-content-center">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={handleChange}
              placeholder="password"
              required
            />
          </div>

          <div className="d-flex justify-content-center mt-2 gap-3">

          {isLoading && "Wait I'm Working🏃..."}
          {!isLoading && <input type="submit" className=" btn btn-gradient btn-secondary" value="Login" />}

          <button id='btn'
            className="btn bg-gradient btn-secondary"
            onClick={() => dispatch(authActions.signupPage())}
          >
            New User?
          </button>
        <button id='btn'
          className="btn bg-gradient btn-secondary"
          onClick={() => dispatch(authActions.showForgotPasswordModal())}
        >
          Forgot Password?
        </button>
      </div>
        </form>
    </div>
  );
}

export default Login