const express = require('express');
const { getAllCoachingSessions, getCoachingSessionById, createCoachingSession, updateCoachingSession, deleteCoachingSession } = require('../controllers/coachingController');
const router = express.Router();

router.get('/', getAllCoachingSessions);
router.get('/:id', getCoachingSessionById);
router.post('/', createCoachingSession);
router.put('/:id', updateCoachingSession);
router.delete('/:id', deleteCoachingSession);


module.exports = router;
