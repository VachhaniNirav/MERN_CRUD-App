import express from "express";
import mongoose from "mongoose";
import route from "./controller/route/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));             // middleware to parse JSON
app.use(bodyParser.urlencoded({ extended: true }));       // middleware to parse urlencoded bodies 
app.use(cors());                                          // allow Cross Origin Resourse Sharing
app.use('/users', route)                                  // mount the middleware function(s)


const PORT = 8000;
const URL = 'mongodb+srv://___@cluster0.ul1fm.mongodb.net/___?retryWrites=true&w=majority'

// connect to database_MongoDB
mongoose.connect(URL).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}).catch(error => {
    console.log('Error: ', error.message);
});

