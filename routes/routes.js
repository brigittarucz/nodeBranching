const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const dashboardController = require('../controllers/dashboard');

router.get('/', authController.getAuth);
router.post('/', authController.postAuth);
router.get('/dashboard/:username', dashboardController.getDashboard);

module.exports = router;