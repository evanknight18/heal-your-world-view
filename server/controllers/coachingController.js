const CoachingSession = require('../models/CoachingSession');

// Get all coaching sessions
exports.getAllCoachingSessions = async (req, res) => {
    try {
        const sessions = await CoachingSession.find();
        res.json(sessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get coaching session by ID
exports.getCoachingSessionById = async (req, res) => {
    try {
        const session = await CoachingSession.findById(req.params.id);
        if (!session) {
            return res.status(404).json({ msg: 'Session not found' });
        }
        res.json(session);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new coaching session
exports.createCoachingSession = async (req, res) => {
    try {
        const newSession = new CoachingSession(req.body);
        const session = await newSession.save();
        res.json(session);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a coaching session
exports.updateCoachingSession = async (req, res) => {
    try {
        let session = await CoachingSession.findById(req.params.id);
        if (!session) {
            return res.status(404).json({ msg: 'Session not found' });
        }
        session = await CoachingSession.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(session);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a coaching session
exports.deleteCoachingSession = async (req, res) => {
    try {
        const session = await CoachingSession.findById(req.params.id);
        if (!session) {
            return res.status(404).json({ msg: 'Session not found' });
        }
        await CoachingSession.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Session removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
