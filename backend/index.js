const express = require("express");
const path = require("path");
const factsRouter = require("./routes/facts");

const app = express();

app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/api/fact", factsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Dog Facts server running at http://localhost:${port}`);
});

module.exports = app;
