const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    true_evaluation_labels_url: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true })

const project = mongoose.model('projects', projectSchema)
module.exports = project;