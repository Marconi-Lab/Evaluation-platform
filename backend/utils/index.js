const Project = require("../model/project")
const evalProject = require("../model/evaluate")

exports.putProject = async (req, res, next) => {
    try{
        const { title, description , image_url, true_evaluation_labels_url } = req.body;

        const newProject = new Project({
            title,
            description: description,
            image_url: image_url,
            true_evaluation_labels_url: true_evaluation_labels_url
        });
        await newProject.save();
        res.json({
            project: newProject,
            message: "New Project Created Successfully"
        })
    }
    catch(err){
        res.json({
            msg: `${err}`
        })
    }
};

exports.getProjects = async (req, res, next) => {
    try{
        const project = await Project.find({})
        res.status(200).json({
            data: project,
            msg: "that is the data"
        })
    }
    catch(err){
        res.status(401).json({msg: `${err}`})
    }
};

exports.getProject = async (req, res, next) => {
    try{
        const projectid = req.params.project_id;
        const project = await Project.findById(projectid);
        
        if (!project) return res.json({ message: "Project doesnot exist" });
        res.status(200).json({
            data: project,
        });
    }
    catch(err){
        res.status(401).json({
            msg: `ProjectID incorrect`,
        });
    }
};

exports.deleteProject = async (req, res, next) => {
    try {
      const projectId = req.params.project_id;
  
      //Checks if project exist
      const project = await Project.findById(projectId);

      if (!project) return res.json({ message: "Project doesn't exist or has already been deleted" });
      await Project.findByIdAndDelete(projectId);
      res.status(200).json({
        data: null,
        message: "Project has been deleted",
      });
    } catch (err) {
      res.status(401).json({
        msg: `${err}`,
    }); 
    }
};

// -------------------------------------------------
exports.getEvaluation = async (req, res, next) => {
    try{
        const projectid = req.params.project_id;
        const projEvaluation = await evalProject.findById(projectid);

        if (!projEvaluation) return res.json({ msg: "Project not yet evaluated (Upload csv for evaluation)" });
        res.status(200).json({ data: projEvaluation });
    }
    catch(err){
        res.status(401).json({
            msg: 'Incorrect Project Id',
        });
    }
}
