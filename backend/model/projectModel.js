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
        type: String
    },
    true_evaluation_labels_url: {
        type: String
    },
    description: {
        type: String
    }
}, {timestamps: true})

const project = mongoose.model('Projects',projectSchema)
module.exports = project;