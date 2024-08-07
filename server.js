require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptionsDelegate = require('./config/corsOptionsDelegate.js')
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnection.js');
const PORT = process.env.PORT || 5000;

dbConnect();

app.use(express.json());

app.use(cors(corsOptionsDelegate));

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/userReg', require('./routes/userReg'));
app.use('/registrants', require('./routes/api/registrants'));

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

mongoose.connection.once('open', () => {
    console.log('this app is connected to MongoDB')
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});