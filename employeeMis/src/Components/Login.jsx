import React, { useState } from "react";
import "./style.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const [error, setError]  = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/auth/adminlogin', values)
    .then(result => {
        if(result.data.loginStatus){
            navigate('/dashboard')
        } else{
            setError(result.data.Error);
        }
        
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-danger">{error && error}</div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <string>Email:</string>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email id"
              className="form-control rounded-0"
              onChange={(e) =>setvalues({...values, email : e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <string>Password:</string>
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              className="form-control rounded-0"
              onChange={(e) =>setvalues({...values, password : e.target.value})}
            />
          </div>
          <div className="mb-2">
            <button className="btn btn-success w-100 rounded-0">Login</button>
          </div>
          <div className="mb-1">
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label>You are agree with term & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
