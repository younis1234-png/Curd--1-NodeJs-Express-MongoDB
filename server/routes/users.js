const express = require("express");
const router = express.Router();

const users = [
  {
    name: "Browm",
    lasName: "Tom",
    age: "25",
  },
];

// all routes in here start with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

module.exports = router;
