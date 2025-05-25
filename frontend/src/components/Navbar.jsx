// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-purple-600">EventEase</h1>
      <ul className="flex space-x-6 text-gray-700">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Providers</a></li>
      </ul>
      <div className="space-x-4">
        <button className="text-sm px-4 py-2 border rounded text-purple-600 border-purple-600 hover:bg-purple-100">Login</button>
        <button className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
