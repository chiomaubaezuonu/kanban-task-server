const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProjectModel = require('./Model/ProjectModel')
require('dotenv').config();

const app = express();


app.use(express.json())
app.use(cors())
const port = "5000";

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('mongodb successfully connected'))
    .catch(err => console.error(err))

app.get('/projects', (req, res) => {
    ProjectModel.find()
        .then(result => res.json(result))
})
app.post('/', (req, res) => {

})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})