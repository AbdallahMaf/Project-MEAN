const express = require('express');
const router = express.Router();

const ctrUser = require('../controllers/user.controller');

router.post('/register', ctrUser.register);

module.exports = router;
