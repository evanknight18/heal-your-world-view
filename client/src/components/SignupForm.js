import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        state: '',
        country: ''
    });

    const { firstName, lastName, email, password, city, state, country } = formData;
    const dispatch = useDispatch();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        dispatch(registerUser({ firstName, lastName, email, password, city, state, country }));
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={firstName} onChange={onChange} required />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={onChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <div>
                <label>City</label>
                <input type="text" name="city" value={city} onChange={onChange} required />
            </div>
            <div>
                <label>State</label>
                <input type="text" name="state" value={state} onChange={onChange} required />
            </div>
            <div>
                <label>Country</label>
                <input type="text" name="country" value={country} onChange={onChange} required />
            </div>
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
