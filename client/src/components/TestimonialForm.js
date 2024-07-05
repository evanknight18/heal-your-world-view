import React, { useState } from 'react';
import axios from 'axios';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const { name, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/testimonials', formData);
      console.log('Testimonial submitted', res.data);
      // Reset form after submission
      setFormData({
        name: '',
        message: ''
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit a Testimonial</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChange}
          required
          className="w-full p-2 border rounded"
          placeholder="Your Name"
          title="Enter your name"
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={onChange}
          required
          className="w-full p-2 border rounded"
          placeholder="Your Testimonial"
          title="Enter your testimonial"
          autoComplete="off"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Submit Testimonial
      </button>
    </form>
  );
};

export default TestimonialForm;
