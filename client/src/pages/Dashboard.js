import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/api/users/${user._id}`);
        setUserData(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  if (!user) {
    return <p>You need to log in to view this page.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold">Welcome, {userData.name}</h2>
        <p>Email: {userData.email}</p>
        {/* Add more user-specific details here */}
      </div>
    </div>
  );
};

export default Dashboard;
