const express = require("express");

require("../src/db/conn/conn");
global.BestFriendsModel = require("../src/db/schema/bestFriends");

const app = express();
app.use(express.json());

// Routes
const FriendCreate = require("./routes/friendCreateRoute");
const FriendRead = require("./routes/friendReadRoute");
const FriendUpdate = require("./routes/friendUpdateRoute");
const FriendDelete = require("./routes/friendDeleteRoute");

app.get("/", (req, res) => {
  res.json("This is root directory");
});

// Friend Create
app.use(FriendCreate);

// Friend Read
app.use(FriendRead);

// Friend Update
app.use(FriendUpdate);

// Friend Delete
app.use(FriendDelete);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
