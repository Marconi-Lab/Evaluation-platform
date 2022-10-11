const mongoose = require("mongoose");
const {projectConnection} = require("../connection");

const project = () => {
    const schema = mongoose.Schema;
    const projectSchema = new schema({
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

    return projectConnection.model('userproject', projectSchema)
}

module.exports = {project}