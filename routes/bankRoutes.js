const express = require("express");
const banksController = require("./../controller/banksController");
const router = express.Router();

router.route("/").get(banksController.getBanks)

module.exports = router;
