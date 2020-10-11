const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//POST
router.post("/add-feedback", async (req, res) => {
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

// GET Route
router.get("/", async (req, res) => {
  try {
    const allFeedbackData = await pool.query(
      "SELECT * FROM feedback ORDER BY id"
    );
    res.json(allFeedbackData.rows);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
}); //END GET Route

//DELETE Route
router.delete("/delete-row-entry/:id", async (req, res) => {
  try {
    console.log("in delete!");
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM feedback WHERE id=$1", [
      id,
    ]);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
}); //END DELETE Route

module.exports = router;
