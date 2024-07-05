import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li><Link to="/" className="text-white hover:text-yellow-500">Home</Link></li>
        <li><Link to="/test" className="text-white hover:text-yellow-500">Test</Link></li>
        <li><Link to="/podcasts" className="text-white hover:text-yellow-500">Podcasts</Link></li>
        <li><Link to="/coaching" className="text-white hover:text-yellow-500">Coaching</Link></li>
        {user ? (
          <>
            <li><Link to="/dashboard" className="text-white hover:text-yellow-500">Dashboard</Link></li>
            <li><button onClick={logout} className="text-white hover:text-yellow-500">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="text-white hover:text-yellow-500">Login</Link></li>
            <li><Link to="/signup" className="text-white hover:text-yellow-500">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
