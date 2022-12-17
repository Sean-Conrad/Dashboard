const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const routes = require('./routes/api');
const userRoutes = require('./routes/user');

//express app
const app = express();
const PORT = process.env.PORT || 8080;

//connect to db
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log("Connected!");
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api', routes);
app.use('/user', userRoutes);

//HTTP Request logger
app.use(morgan('tiny'));



app.listen(PORT, console.log(`Server is starting at ${PORT}`));
