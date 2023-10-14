const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./routes/user');
const tasksRouter = require('./routes/tasks');
// const jwt = require('jsonwebtoken');
// const keys = require('../settings/keys'); 


const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', tasksRouter);
// app.set('key', keys.key);
// app.use(express.urlencoded({}));
// app.use(express.json());

// route
app.get('/', (req, res) => {
    res.send("Welcome to my API partner");
}) 

// Mongodb connection 
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connect to MongoDb Atlas'))
.catch((error) => console.log(error))

app.listen(port, () => console.log('server listening on port', port));