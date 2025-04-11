// import everything and initalize it

const express = require("express");
const path = require("path");
const factsRouter = require("./routes/facts");

const app = express();

//serve the frontend files
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/api/fact", factsRouter);

//start the server up
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Dog Facts server running at http://localhost:${port}`);
});

module.exports = app;

// import the
