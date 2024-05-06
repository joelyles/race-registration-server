const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/register', require('./routes/register'));

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));