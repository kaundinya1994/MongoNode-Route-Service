const express = require("express");
const router = express.Router();

const friendReadService = require("../services/friendReadService");

router.get("/read", friendReadService);

module.exports = router;
