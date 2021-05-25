const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let users = [
  //   {
  //     name: "Browm",
  //     lasName: "Tom",
  //     age: "23",
  //   },
  //   {
  //     name: "Summi",
  //     lasName: "Ali",
  //     age: "19",
  //   },
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

// get a reques for a uique user with id ( with rq.params)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  // we want to find our user
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // we use the filter methode to remove a user from our array
  users = users.filter((user) => user.id !== id);
  res.send(`Users with the id ${id} deleted from the database`);
});

//put is ude to update everything in the user
// patch is used to update one thing
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;
  const updateUser = users.find((user) => user.id == id);

  if (name) {
    updateUser.name = name;
  }
  if (lastName) {
    updateUser.lastName = lastName;
  }
  if (age) {
    updateUser.age = age;
  }

  res.send(`Users with the id ${id} dhas been updataed`);
});

module.exports = router;
 