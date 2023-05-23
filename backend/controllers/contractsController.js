const Contracts = require('../models/contracts')
const mongoose = require('mongoose')

//Get all contracts
const getContracts = async (req, res) => {
    const contracts = await Contracts.find({}).sort({createdAt: -1})
    
    res.status(200).json(contracts)
}


// const deleteContract = async (req, res) => {
//     const {id} = req.params
// }

module.exports = {getContracts};