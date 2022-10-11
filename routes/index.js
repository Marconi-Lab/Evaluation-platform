const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth")

router.post('/register', auth.signup)

router.post('/login', auth.login)

router.get('/projects', auth.findProject)

module.exports = router;