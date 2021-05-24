const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const users = [
  {
    name: "Browm",
    lasName: "Tom",
    age: "23",
  },
  {
    name: "Summi",
    lasName: "Ali",
    age: "19",
  },
];

// all routes in here start with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  // push our new data to our array
  const user = req.body;
  const userId = uuidv4();
  // and add the unique id
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`Users with the name ${user.name} added to the database!`);
});

module.exports = router;
