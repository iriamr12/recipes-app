import React, { useContext } from 'react'
import './Login.css'
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../components/MixContext';

const Login = () => {
    const[credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const auth = useContext(context);
    console.log("here is the auth context object", auth)

    const {username, password} = credentials;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name] : value});
    }

    const login = async () => {
        try{
            await auth.login(credentials);
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    const responseMessage = (response) => {
        console.log(response); 
      }
    
      const errorMessage = (error) => {
        console.log(error);
      };

    const logout = () => {
        auth.logout();
    }
  return (
    <div className="space">
      <div className="custom-form-container">
      <div className="card-body-login">
        <div className="login-details-card">
        <h3 className="login-header">Login</h3>
        <br/>
          <label htmlFor="username"></label>
          <input
            id="username"
            value={username}
            onChange={handleChange}
            name="username"
            placeholder="Username"
            type="text"
            className="form-control mb-2"
            required
          />
          <label htmlFor="password"></label>
          <input
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
            type="password"
            className="form-control mb-2"
            required
          />
        </div>
        <div>
        <br/>
          <button className="login-button" type="submit" onClick={login}>
            Log in
          </button>
          <button className="log-button" type="submit" onClick={logout}>
            Log out
          </button>
          <p>
            {" "}
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}

export default Login