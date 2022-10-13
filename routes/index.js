const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController")
const up = require("../controllers/uploadContoller")
const scores= require("../controllers/comparisonController")
const proj = require("../utils/")

router.post('/register', auth.signup)

router.post('/login', auth.login)

router.post('/upload_file', up.upload)

router.get('/projects', proj.findProject)

router.get('/score', scores.score)

module.exports = router;