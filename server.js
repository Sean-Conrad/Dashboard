const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Connected!");
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//HTTP Request logger
app.use(morgan('tiny'));

app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
