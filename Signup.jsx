import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [showPassword,setShowPassword]=useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
      if(!email||!username||!password||!age){
        setError('all fields are mandatory');

        return;
      }
      const response = await fetch('http://localhost:3000/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password, age }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Signup failed');
        
        
      }
    
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="h-3/4 w-1/4 items-center justify-center flex flex-col border-8 border-white rounded-lg gap-4 text-white">
        <span className="text-2xl font-bold underline text-slate-600 bg-white p-2 rounded-xl">
          Made2Automate
        </span>
        <div className="text-2xl font-bold">SIGN UP</div>
        <input
          type="email"
          className="w-3/4 p-3 rounded-xl text-black outline-none font-semibold"
          placeholder="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)
            setError('')}}
        />
        <input
          type="text"
          className="w-3/4 p-3 rounded-xl text-black outline-none font-semibold"
          placeholder="Username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)  
            setError('')}}
        />
        <input
          type={showPassword ? "text" : "password"}
          className=" w-3/4 p-3 rounded-xl text-black outline-none font-semibold"
          placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) 
            setError('') }}
        />
        
        <input
          type="text"
          className="w-3/4 p-3 rounded-xl text-black outline-none font-semibold"
          placeholder="Age"
          value={age}
          onChange={(e) => {setAge(e.target.value) 
            setError('')}}
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
          className="text-xl border border-white p-2 rounded-xl font-bold hover:bg-slate-600"
          onClick={handleSignup}
        >
          Signup
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          Already have an account!{' '}
          <Link to="/login" className="hover:underline font-bold text-lg hover:text-xl">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
