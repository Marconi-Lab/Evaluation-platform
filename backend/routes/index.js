const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");
const up = require("../controllers/uploadContoller");
const scores = require("../controllers/comparisonController");
const proj = require("../utils/");

router.post("/register", auth.signup);

router.post("/login", auth.login);

// labels evaluation should be done at the time of upload
router.post("/file", up.upload);

router.get("/projects", proj.findProject);

// the controller in this endpoint should be embedded in the file upload endpoint
// thus there is no need for this
router.get("/score", scores.score);

// TODO - DELETE /project/<projectID> (admin only)
// TODO - GET /project/<projectID>
// TODO - GET /evaluation/<projectID> (returns evaluation in descending order of prediction scores)

module.exports = router;
