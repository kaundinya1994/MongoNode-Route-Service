const express = require("express");
const router = express.Router();

const friendCreateService = require("../services/friendCreateService");

router.post("/insert", friendCreateService);

module.exports = router;
