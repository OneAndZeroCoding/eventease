// src/components/Navbar.jsx

import {Link} from 'react-scroll';
import {Router, Link as RouterLink} from 'react-router-dom';

function Navbar() {
  return (
    <nav id="Navbar" className="flex items-center sticky top-0 justify-between px-6 py-4 bg-mocha shadow-md">
      <a href="/" className="flex items-center gap-2">
        <img src="/logoMain-light.png" alt="EventEase Logo" className="h-16 w-auto " />
      </a>

  <ul className="flex space-x-6 text-lg">
  <li className="cursor-pointer hover:scale-105 transform transition duration-300 text-slate-300">
    <Link
      to="services"       // matches the `id` of the section
      smooth={true}       // enables smooth scrolling
      duration={600}      // scroll time in ms
      offset={-80}       // adjust if you have sticky nav

    >
      Services
    </Link>
  </li>
  <li className="cursor-pointer hover:scale-105 transform transition duration-300 text-slate-300">
    <Link to="about" smooth={true} duration={600} offset={-80} className="cursor-pointer">
      About
    </Link>
  </li>
  <li className="cursor-pointer hover:scale-105 transform transition duration-300 text-slate-300">
    <Link to="provider" smooth={true} duration={600} offset={-80} className="cursor-pointer">
      Provider
    </Link>
  </li>
  <li className="cursor-pointer hover:scale-105 transform transition duration-300 text-slate-300">
    <Link to="contact" smooth={true} duration={600} offset={-80} className="cursor-pointer">
      Contact Us
    </Link>
  </li>
</ul>

      <div className="space-x-4">
        <button className="text-sm px-4 py-2 border rounded text-white border-white hover:bg-transparent">Login</button>
        <RouterLink to="/register-user">
          <button className="text-sm px-4 py-2 bg-white text-mocha rounded hover:bg-slate-200">Sign Up</button>
        </RouterLink>
      </div>
    </nav>
  );
}

export default Navbar;
