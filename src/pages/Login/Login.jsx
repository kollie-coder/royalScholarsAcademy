import{ React, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

import './Login.scss'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
    const response = await fetch('http://francisop.pythonanywhere.com/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const data = await response.json();
    if (response.ok) {
      const token = data.token;
      const role = data.role;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      window.alert('Login successful!');
      if (role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } else {
      setError(data.message);
    }
  } catch (error) {
    setError('An error occurred. Please try again later.');
  }
  }
  
  return (
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h1>RESULT PORTAL</h1>
            <h3>LOGIN</h3>
            
          </div>
        </div>
        
        <form class="login-form" onSubmit={handleLogin}>
        {error && <div className="error">{error}</div>}
          <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} required/>
          <input type="password"  placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>

          
          <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'SIGN IN'}
            </button>

        </form>
      </div>
    </div>
  )
}

export default Login
