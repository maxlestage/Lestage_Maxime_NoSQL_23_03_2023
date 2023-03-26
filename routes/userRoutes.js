const express = require("express");

// Import du controller user pour gérer les actions.
const userCtrl = require("../controllers/user");

const router = express.Router();

// /api/auth/routeActionController.
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
