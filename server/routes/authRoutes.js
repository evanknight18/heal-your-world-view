const express = require('express');
const { register, login, logout, forgotPassword, resetPassword, getCurrentUser, updateUser, deleteUser, getUsers, getUser, getUserByEmail, getUserByUsername, getUserByFirstName, getUserByLastName, getUserByPhoneNumber, getUserByCity, getUserByState, getUserByCountry, getUserByZipCode } = require('../controllers/authController');
const router = express.Router();


// Define your authentication routes here
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.get('/me', getCurrentUser);
router.put('/updatedetails', updateUser);
router.delete('/deleteuser', deleteUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.get('/users/email/:email', getUserByEmail);
router.get('/users/username/:username', getUserByUsername);
router.get('/users/firstname/:firstname', getUserByFirstName);
router.get('/users/lastname/:lastname', getUserByLastName);
router.get('/users/phonenumber/:phonenumber', getUserByPhoneNumber);
router.get('/users/city/:city', getUserByCity);
router.get('/users/state/:state', getUserByState);
router.get('/users/country/:country', getUserByCountry);
router.get('/users/zipcode/:zipcode', getUserByZipCode);


module.exports = router;


