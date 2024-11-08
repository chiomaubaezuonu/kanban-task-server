const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProjectSchema = require('./Model/ProjectSchema')

const app = express();


app.use(express.json())
app.use(cors())
const port = "5000";

app.get('/', (req, res) => {
    res.status(200).json("Check New Kanban home page")
})
app.post('/', (req, res) => {

})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})