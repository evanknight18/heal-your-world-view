const Podcast = require('../models/Podcast');

// Get all podcasts
exports.getAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find();
        res.json(podcasts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get podcast by ID
exports.getPodcastById = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        res.json(podcast);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new podcast
exports.createPodcast = async (req, res) => {
    try {
        const newPodcast = new Podcast(req.body);
        const podcast = await newPodcast.save();
        res.json(podcast);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a podcast
exports.updatePodcast = async (req, res) => {
    try {
        let podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        podcast = await Podcast.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(podcast);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a podcast
exports.deletePodcast = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);
        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }
        await Podcast.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Podcast removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
