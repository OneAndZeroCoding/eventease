import React, { useState } from 'react';
import {Link as RouterLink} from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/auth/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setRegistered(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left side */}
        <div className="w-full md:w-[30%] flex flex-col items-center justify-center p-8 bg-mocha">

            {registered ? (
              <div className="text-white flex flex-col justify-around items-center text-center">
              <div className="w-full max-w-sm">
                <RouterLink to='/'>
                  <img src="logoMain-light.png" alt="logo" className='w-auto' />
                </RouterLink>
              </div>
                <h2 className="text-3xl font-bold my-10 text-white">Registered Successfully!</h2>
                <a href="/login">
                  <button className="bg-base text-mocha py-2 px-4 mt-8  rounded hover:bg-accent transition">
                    Go to Login
                  </button>
                </a>
              </div>
            ) : (
              <>
              <div className="w-full max-w-sm">
                <RouterLink to='/'>
                  <img src="logoMain-light.png" alt="logo" className="pb-9 w-auto pl-3" />
                </RouterLink>
              </div>
                <h2 className="text-4xl font-sans text-white mb-6">Create an Account</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full bg-base text-mocha py-2 font-bold rounded-lg hover:bg-accent transition"
                  >
                    Register
                  </button>
                </form>
              </>
            )}
          
        </div>

        {/* Right side */}
        <div
          className="hidden md:flex w-full md:w-[70%] bg-cover bg-center text-white items-center justify-center"
          style={{ backgroundImage: "url('/dinnerImg.jpg')" }}
        >
          <div className="bg-black bg-opacity-0 p-6 rounded-md">
            <h2 className="text-7xl font-hero mb-2">Welcome to EventEase</h2>
            <p className="font-sans text-3xl my-10 w-auto">Ready to dive into the world of event planning?</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-espresso text-white py-4 px-6 text-center flex justify-center items-center gap-4">
        <span className="text-lg font-medium">Are you a service provider? Join us today!</span>
        <button className="bg-mocha text-base px-4 py-1 rounded hover:bg-base hover:text-mocha transition">
          Join as Provider
        </button>
      </div>
    </div>
  );
}

export default Register;
