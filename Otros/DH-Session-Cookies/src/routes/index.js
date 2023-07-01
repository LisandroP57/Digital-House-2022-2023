const express = require("express");
const router = express.Router();
const { index, user, userSave, forget } = require("../controllers/indexController");
const validationData = require("../validations/validationData");
const userSession = require ('../middleware/userSession')

router
    .get("/", index)
    .post("/", validationData, userSave)
    .get("/user", userSession, user)
    .get("/user/forget", userSession, forget);

module.exports = router;