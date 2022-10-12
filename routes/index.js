const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth")
const scores= require("../csv_file/comparison")
const proj = require("../utils/")

router.post('/register', auth.signup)

router.post('/login', auth.login)

router.get('/projects', proj.findProject)

router.get('/score', scores.score)

router.post('/upload_file', proj.upload)

module.exports = router;