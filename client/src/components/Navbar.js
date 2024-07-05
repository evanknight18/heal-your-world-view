import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-yellow-500">Home</Link>
          <Link to="/podcasts" className="text-white hover:text-yellow-500">Podcasts</Link>
          <Link to="/coaching" className="text-white hover:text-yellow-500">Coaching</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-yellow-500">Dashboard</Link>
              <button onClick={logout} className="text-white hover:text-yellow-500">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-yellow-500">Login</Link>
              <Link to="/signup" className="text-white hover:text-yellow-500">Signup</Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <Link to="/" className="block text-white hover:text-yellow-500 p-2">Home</Link>
            <Link to="/podcasts" className="block text-white hover:text-yellow-500 p-2">Podcasts</Link>
            <Link to="/coaching" className="block text-white hover:text-yellow-500 p-2">Coaching</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="block text-white hover:text-yellow-500 p-2">Dashboard</Link>
                <button onClick={logout} className="block text-white hover:text-yellow-500 p-2">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-white hover:text-yellow-500 p-2">Login</Link>
                <Link to="/signup" className="block text-white hover:text-yellow-500 p-2">Signup</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
