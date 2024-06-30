const express = require('express');
const { getAllTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const router = express.Router();

router.get('/', getAllTestimonials);
router.get('/:id', getTestimonialById);
router.post('/', createTestimonial);
router.put('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);


module.exports = router;
