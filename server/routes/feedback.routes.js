const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//POST
router.post("/add-feedback", async (req, res) => {
  console.log("in POST!!");
});

module.exports = router;
