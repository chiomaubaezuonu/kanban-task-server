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
app.post('/projects', async (req, res) => {
    try {
        //Extract project data from the request body
        const { boards } = req.body

        //validate the incoming data 
        if (!boards) {
            return res.status(400).json({ error: "Invalid input" });
        }

        // Create a new project document in MongoDB
        const newProject = await ProjectModel.create({ boards });

        // Respond with the created project
        res.status(201).json(newProject)

    }
    catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})