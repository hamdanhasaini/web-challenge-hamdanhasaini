"use client"
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react';
import usersData from '../user.json';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('jalan')
    setError('');

    const user = usersData.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Successful login logic here (e.g., redirect to a dashboard)
      alert('Successs');
      window.location.href='/dashboard';
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-start  bg-white">
        <div className="min-h-screen md:min-h-min bg-white w-full p-8">
          <h2 className="text-2xl text-black font-semibold mb-4">Login</h2>
          <span className='text-black'>Please sign in to continue</span>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="my-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                required
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded border-b-2 px-3 py-2 focus:outline-none text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border-b-2 px-3 py-2 focus:outline-none text-black"
              />
            </div>
            <div className="text-center float-right">
              <button
                class="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type='submit'
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
