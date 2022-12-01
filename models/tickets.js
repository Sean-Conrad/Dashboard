const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const TestTicketSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const TestTicket = mongoose.model('TestTicket', TestTicketSchema);

const data = {
    title: "Here is a ticket",
    body: "Hooray here is a new ticket!"
};

module.exports = TestTicket;