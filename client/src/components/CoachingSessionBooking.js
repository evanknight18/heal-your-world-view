import React, { useState } from 'react';

const CoachingSessionBooking = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    clientInfo: ''
  });

  const { date, time, clientInfo } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Booking submitted', formData);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <div>
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={onChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Time</label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={onChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Client Info</label>
        <textarea
          name="clientInfo"
          value={clientInfo}
          onChange={onChange}
          required
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Book Session
      </button>
    </form>
  );
};

export default CoachingSessionBooking;
