const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//POST
router.post("/add-feedback", async (req, res) => {
  console.log("in POST!!");
  try {
    const { feeling, understanding, supported, comments } = req.body;
    const addFeedback = await pool.query(
      "INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4) RETURNING *",
      [feeling, understanding, supported, comments]
    );
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
}); //End of POST

module.exports = router;
