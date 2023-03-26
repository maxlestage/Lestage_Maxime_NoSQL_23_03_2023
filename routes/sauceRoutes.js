const express = require("express");
const router = express.Router();

// Import du controller pour faire le lien avec l'appel de route.
const sauceCtrl = require("../controllers/sauce");
const likeCtrl = require("../controllers/like");
const commentCtrl = require("../controllers/comment");

// /api/sauces/routeActionController.
router.get("/", sauceCtrl.getAllSauce);
router.post("/", sauceCtrl.createSauce);
router.get("/:id", sauceCtrl.getOneSauce);
router.put("/:id", sauceCtrl.modifySauce);
router.delete("/:id", sauceCtrl.deleteSauce);
router.post("/:id/like", likeCtrl.userLikeOrDislikeSauce);
router.post("/:id/comment", commentCtrl.userComment);
router.delete("/:id/comment", commentCtrl.deleteComment);

// Permet d'utiliser sauce.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
