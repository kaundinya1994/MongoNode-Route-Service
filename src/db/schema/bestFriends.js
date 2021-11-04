const mongoose = require("mongoose");

const bestFriendsSchema = new mongoose.Schema({
  name: String,
  ph: Number,
});

const BestFriendsModel = new mongoose.model(
  "BestFriendsModel",
  bestFriendsSchema
);

module.exports = BestFriendsModel;
