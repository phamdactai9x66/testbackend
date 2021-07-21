import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import ProductRouter from './routes/product'
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log(`Connected`);
})
mongoose.connection.on('Error', err => {
    console.log(`Data connect failed, ${err.message}`);
})

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({ credentials: 'same-origin' }));

app.use("/api", ProductRouter)
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})