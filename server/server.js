const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const feedbackRouter = require("./routes/feedback.routes");
const cors = require("cors");

/** ---------- MIDDLEWARE ---------- **/
app.use(cors());
app.use(bodyParser.json()); // needed for angular requests

if (process.env.NODE_ENV == "production") {
  app.use(express.static("./build"));
} else {
  //set up static page
  app.use(express.static("./public"));
}
/** ---------- EXPRESS ROUTES ---------- **/
app.use("/feedback", feedbackRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
