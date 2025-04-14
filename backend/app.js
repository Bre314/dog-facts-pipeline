const express = require("express");
const cors = require("cors");
const { getRandomFact } = require("./facts");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.get("/api/fact", (req, res) => {
  const fact = getRandomFact();
  res.json({ fact });
});

app.listen(PORT, () => {
  console.log(`Dog Facts API running on http://localhost:${PORT}`);
});
