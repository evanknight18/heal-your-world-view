import React from 'react';
import TestimonialForm from '../components/TestimonialForm';

const Home = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-center font-bold mb-4">Welcome to Heal Your World View</h1>
      <p className="text-center mb-4">This is a place where you can listen to inspiring podcasts and book life coaching sessions.</p>
      <TestimonialForm />
    </div>
  );
};

export default Home;
