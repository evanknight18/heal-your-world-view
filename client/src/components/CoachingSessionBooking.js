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
        // Handle booking submission logic here
        console.log('Booking submitted', formData);
    };

    return (
        <div>
            <h2>Book a Coaching Session</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Date</label>
                    <input type="date" name="date" value={date} onChange={onChange} required />
                </div>
                <div>
                    <label>Time</label>
                    <input type="time" name="time" value={time} onChange={onChange} required />
                </div>
                <div>
                    <label>Client Info</label>
                    <textarea name="clientInfo" value={clientInfo} onChange={onChange} required />
                </div>
                <button type="submit">Book Session</button>
            </form>
        </div>
    );
};

export default CoachingSessionBooking;
