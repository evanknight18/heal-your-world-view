import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import Coaching from './pages/Coaching';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TestComponent from './components/TestComponent';
import useAuth from './hooks/useAuth';

const App = () => {
  const { user, loading, login, logout } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar user={user} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestComponent />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;