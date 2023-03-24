const Careers = require('../models/careers')
const mongoose = require('mongoose')

//Get all careers
const getCareers = async (req, res) => {
    const contracts = await Careers.find({}).sort({createdAt: -1})
    
    res.status(200).json(careers)
}


// const deleteCareer = async (req, res) => {
//     const {id} = req.params
// }

module.exports = {getCareers};