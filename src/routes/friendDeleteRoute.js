const express = require("express");
const router = express.Router();

const friendDeleteService = require("../services/friendDeleteService");

router.post("/delete", friendDeleteService);

module.exports = router;
