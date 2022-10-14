const Project = require("../model/projectModel")

exports.findProject = async (req, res, next) => {
    const project = await Project.find({})
    res.status(200).json({
        data: project,
        msg: "that is the data"
    })
};

