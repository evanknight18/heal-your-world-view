const Testimonial = require('../models/Testimonial');

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get testimonial by ID
exports.getTestimonialById = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ msg: 'Testimonial not found' });
        }
        res.json(testimonial);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        const testimonial = await newTestimonial.save();
        res.json(testimonial);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a testimonial
exports.updateTestimonial = async (req, res) => {
    try {
        let testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ msg: 'Testimonial not found' });
        }
        testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(testimonial);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ msg: 'Testimonial not found' });
        }
        await Testimonial.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Testimonial removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
