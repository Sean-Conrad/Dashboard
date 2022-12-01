const express = require('express');
const router = express.Router();
const TestTicket = require('../models/tickets');

//Routes
router.get('/', (req, res) => {


    TestTicket.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);

        })


});

router.get('/name', (req, res) => {
    const data = {
        username: 'jackyyy chan',
        age: 3
    };
    res.json(data);
});

module.exports = router;