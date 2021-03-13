const express = require('express');
const {getCountry, addResume, getResume, getPdf} = require('../action/Action');

const router = express.Router();

router.get('/countries', getCountry);

router.post('/addResume', addResume);

router.get('/getResume', getResume);

router.get('/:id', getPdf);

module.exports = router;
