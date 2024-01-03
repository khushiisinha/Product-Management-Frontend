import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    if(!username||!password){
      setError( 'All fields are mandatory');

      return;
    }
    const res = await fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      const {token}=data;
      localStorage.setItem('token',token);
      navigate('/dashboard', {
        state: {
          userIsAuthenticated: true,
          username,
          token: data.token,
        },
      });
    } else {
      const data = await res.json();
        setError(data.message || 'Signup failed');
        
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="  w-1/4  items-center justify-center flex flex-col  border-8 border-white rounded-lg gap-4 text-white py-4">
        <span className="text-2xl font-bold underline text-slate-600 bg-white p-2 rounded-xl">
          Made2Automate
        </span>
        <div className=" text-2xl font-bold ">WELCOME</div>
        <input
          type="text"
          className=" w-3/4 p-3 rounded-xl text-black outline-none font-semibold"
          placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) 
            setError('')}}
        />
        <input
          type={showPassword ? "text" : "password"}
          className=" w-3/4 p-3 rounded-xl text-black outline-none font-semibold"
          placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) 
            setError('') }}
        />
        <div className="flex gap-2">
          <label htmlFor="check">Show Password</label>
          <input
            id="check"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword((prev) => !prev)} className='h-5 w-5'
          />
        </div>
        <button
          className="text-xl border border-white  p-2 rounded-xl font-bold hover:bg-slate-600" onClick={handleLogin}
        >
          Login
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>Don't have an account? <Link to='/signup' className="hover:underline font-bold text-lg hover:text-xl">Signup</Link></div>
      </div>
    </div>
  );
}

export default Login;
