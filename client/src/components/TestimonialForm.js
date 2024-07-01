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
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h2>Submit a Testimonial</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={message} onChange={onChange} required />
                </div>
                <button type="submit">Submit Testimonial</button>
            </form>
        </div>
    );
};

export default TestimonialForm;
