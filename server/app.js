import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js'
dotenv.config();

const app = express();

const { PORT } = process.env;

app.use('/routes', routes)
    .use('/', (req, res) => res.send('Hello, Node!'))
    .listen(PORT || 4000, () => {
    console.log(`Listening To ${PORT || 4000}...`);
})


