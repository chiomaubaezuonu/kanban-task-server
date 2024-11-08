const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    boards: [
        {
            _id: String,
            name: String,
            columns: [{
                name: String,
                tasks: [{
                    title: String,
                    description: String,
                    status: String,
                    subtasks: [{
                        title: String,
                        isCompleted: Boolean
                    }]
                }],
            }]
        }
    ]
})
const Projects = mongoose.model("projects", ProjectSchema)
module.exports = Projects