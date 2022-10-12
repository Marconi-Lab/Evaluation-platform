const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/')

const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/ProjectDB").then(() => {
    console.log("Database connected");
});

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