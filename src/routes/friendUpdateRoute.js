const express = require("express");
const router = express.Router();

const friendUpdateService = require("../services/friendUpdateService");

router.post("/update", friendUpdateService);

module.exports = router;
