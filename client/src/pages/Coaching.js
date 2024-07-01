import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoachingSessions, createCoachingSession } from '../redux/actions/coachingActions';
import CoachingSessionBooking from '../components/CoachingSessionBooking';

const Coaching = () => {
    const dispatch = useDispatch();
    const sessions = useSelector(state => state.coaching.sessions);
    const loading = useSelector(state => state.coaching.loading);

    useEffect(() => {
        dispatch(fetchCoachingSessions());
    }, [dispatch]);

    const handleBooking = (formData) => {
        dispatch(createCoachingSession(formData));
    };

    return (
        <div>
            <h1>Coaching</h1>
            <CoachingSessionBooking onSubmit={handleBooking} />
            {loading ? <p>Loading...</p> : (
                <ul>
                    {sessions.map(session => (
                        <li key={session._id}>
                            <p>{session.date} at {session.time}</p>
                            <p>{session.clientInfo}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Coaching;
