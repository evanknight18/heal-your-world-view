const express = require('express');
const { getAllPodcasts, getPodcastById, createPodcast, updatePodcast, deletePodcast } = require('../controllers/podcastController');
const router = express.Router();

router.get('/', getAllPodcasts);
router.get('/:id', getPodcastById);
router.post('/', createPodcast);
router.put('/:id', updatePodcast);
router.delete('/:id', deletePodcast);


module.exports = router;
