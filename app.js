require('dotenv').config();
const data = require('./helpers/data.js');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.get('/', (req, res)=>{
    res.render('index', data);
});

console.log(`\nServer running at http://localhost:${PORT}/ ...\n`);