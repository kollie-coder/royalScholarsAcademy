import React from 'react'
import {Link} from 'react-router-dom';
import './Login.scss'

const Login = () => {
  return (
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h1>RESULT PORTAL</h1>
            <h3>LOGIN</h3>
            
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>

          <Link to="/dashboard">
          <button>Sign In</button>

          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
