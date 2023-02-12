import mongoose from 'mongoose';
import cors from "cors";
import {router} from "./router/router";
import express = require('express');

const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/test_technical').then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
});
app.use(cors());
app.use('', router)
app.listen(3000, () => {
    console.log('server running localhost 3000');
})
