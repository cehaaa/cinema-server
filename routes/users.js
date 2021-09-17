const userData = require("../@fake-db/users.json");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(userData);
});

module.exports = router;
