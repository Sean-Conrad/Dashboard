const express = require('express');
const TestTicket = require('../models/tickets');
const TestContract = require('../models/contracts');
const TestCareer = require('../models/careers');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//Require Auth for all routes
//router.use(requireAuth)

//Routes
router.get('/getTickets', (req, res) => {
    TestTicket.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);

        })
});

router.get('/getContracts', (req, res) => {
    TestContract.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);

        })
});

router.get('/getCareers', (req, res) => {
    TestCareer.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);

        })
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newTestTicket = new TestTicket(data);

    newTestTicket.save((error) => {
        if(error){
            res.status(500).json({msg: "sorry, internal server error"});
            return;
        }
        res.json({
            msg: "Your data has been saved! "
        }); 
        
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