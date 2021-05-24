const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  console.log("test");
  res.send("hello from node ");
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});

// GET /useres   ==> find all of our users
// POST /useres   ==> Createa user
// GET /useres/:id   ==> Finds user details
// DELETE /useres/:id   ==> delete user
// PATCH /useres/:id   ==> update user
