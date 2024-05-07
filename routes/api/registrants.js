const express = require('express');
const router = express.Router();
const registerController = require('../../controller/registerController');

router.route('/')
    .get(registerController.getAllRegistrants)
    .post(registerController.createNewRegistrant);

module.exports = router