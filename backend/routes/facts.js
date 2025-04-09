const express = require("express");
const router = express.Router();

const dogFacts = [
  "Dogs have a sense of time.",
  "Dogs can sniff at the same time as breathing.",
  "Some dogs can learn over 1,000 words.",
  "Dogs dream just like humans.",
];

router.get("/", (req, res) => {
  const fact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
  res.json({ fact });
});

module.exports = router;
