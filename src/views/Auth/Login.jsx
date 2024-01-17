import React, { useState } from 'react';
import skanicImage from '../../assets/images/skanic.png';
import sarprasImage from '../../assets/images/sarpras.png';
//import API
import Api from '../../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST', // or 'GET', 'PUT', etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login here
        console.log('Login successful');
      } else {
        // Handle login failure here
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(background.jpg)' }}>
     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-auto w-100px"
            src={sarprasImage}
            alt="sarpras"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sarpras SMKN 1 Ciomas
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            SMK Negeri 1 Ciomas | SMK Pusat Keunggulan
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Masuk
            </button>
          </div>

          <div className="flex items-center mr-100">
            <div className="text-sm">
              <a href="Readme.jsx" className="font-medium text-indigo-600 hover:text-indigo-500">
                Wajib Baca!
              </a>
              <a href="Help.jsx" className="mx-1000 font-medium text-indigo-600 hover:text-indigo-500">
                Help
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;