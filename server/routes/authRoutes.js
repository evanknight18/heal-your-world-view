const express = require('express');
const { register, login, logout, forgotPassword, resetPassword, updateDetails, updatePassword, getCurrentUser, updateUser, deleteUser, getUsers, getUser, getUserByEmail, getUserByUsername, getUserByFirstName, getUserByLastName, getUserByPhoneNumber, getUserByCity, getUserByState, getUserByCountry, getUserByZipCode } = require('../controllers/authController');
const router = express.Router();


// Define your authentication routes here
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;


