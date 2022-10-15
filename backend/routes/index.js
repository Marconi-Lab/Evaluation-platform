const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const file = require("../controllers/upload");
const scores = require("../controllers/comparison");
const proj = require("../utils/");

router.post("/register", auth.signup);

router.post("/login", auth.login);

// labels evaluation should be done at the time of upload
router.post("/file", file.upload);

router.get("/projects", proj.getProjects);

// the controller in this endpoint should be embedded in the file upload endpoint
// thus there is no need for this
router.get("/score", scores.score);


// router.put('/addproject', auth.isAdmin, proj.putProject);

// TODO - DELETE /project/<projectID> (admin only)
router.delete("/project/:project_id", auth.isAdmin, proj.deleteProject);

// TODO - GET /project/<projectID>
router.get("/project/:project_id", proj.getProject);

// TODO - GET /evaluation/<projectID> (returns evaluation in descending order of prediction scores)
// check the table for the project id 
router.get("/evaluation/:project_id", proj.findEval, )

module.exports = router;
