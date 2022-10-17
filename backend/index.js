const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes/')

const app = express()
app.use(express.json())
app.use(cors());
dotenv.config({ debug: true, path: "./.env" });


mongoose.connect("mongodb://localhost:27017/ProjectDB").then(() => {
    console.log("Database connected");
});

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to the Homepage of the evaluation Platform"
    })
});

app.use("/", routes)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})