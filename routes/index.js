const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Index Routes",
    subTitle: "Welcome to index route",
  });
});

module.exports = router;
