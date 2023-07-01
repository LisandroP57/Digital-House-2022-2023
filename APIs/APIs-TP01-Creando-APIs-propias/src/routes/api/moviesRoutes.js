const express = require("express");
const router = express.Router();
const moviesController = require("../../controllers/api/moviesController");

router.get("/movies", moviesController.list);
router.post("/movies/create", moviesController.store);
router.delete("/movies/delete/:id", moviesController.destroy);

module.exports = router;