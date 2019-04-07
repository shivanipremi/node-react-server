const express = require('express');
const app = express();


app.get('/abc', (req, res) => {
    res.send({'HI' : 'THERE'})
})