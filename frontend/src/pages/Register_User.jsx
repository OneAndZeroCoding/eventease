import React from 'react';

function Register() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top section: Form and Image */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left side: Form (30%) */}
        <div className="w-full md:w-[30%] flex items-center justify-center p-8 bg-mocha">
          <div className="w-full max-w-sm">
            <img src="logoMain-light.png" alt="" className='pb-9 w-auto pl-3' />
            <h2 className="text-4xl font-sans text-white mb-6">Create an Account</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-base text-mocha py-2 font-bold rounded-lg hover:bg-accent transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        {/* Right side: Image (70%) */}
        <div
          className="hidden md:flex w-full md:w-[70%] bg-cover bg-center text-white items-center justify-center relative"
          style={{ backgroundImage: "url('/dinnerImg.jpg')" }}
        >
          <div className="bg-black bg-opacity-0 p-6 rounded-md">
            <h2 className="text-7xl font-hero mb-2">Welcome to EventEase</h2>
            <p className="font-sans text-3xl my-10 w-auto">Ready to dive into the world of event planning ?</p>
          </div>
        </div>
      </div>

      {/* CTA Section (One-liner) */}
      <div className="bg-espresso text-white py-4 px-6 text-center flex justify-center items-center gap-4">
        <span className="text-lg font-medium">
          Are you a service provider? Join us today!
        </span>
        <button className="bg-mocha text-base px-4 py-1 rounded hover:bg-base hover:text-mocha transition">
          Join as Provider
        </button>
      </div>
    </div>
  );
}

export default Register;
