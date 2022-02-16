const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings')

// define the home page route
router.get('/', bookingsController.all)
router.post('/', bookingsController.create);
router.put('/:id', bookingsController.update);
router.delete('/:id', bookingsController.delete);

module.exports = router;