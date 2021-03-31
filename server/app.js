require('dotenv').config();
const express = require('express');

const app = express();

const { PORT } = process.env;

app.use((req, res) => {
    res.end("Hello, Node!");
})

app.listen(PORT || 4000, () => {
    console.log(`Listening To ${PORT || 4000}...`);
})


