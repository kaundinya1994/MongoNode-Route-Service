const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/NodeMongoCRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Success : DB - NodeMongoCRUD");
    console.log(
      "\n------------------------------------------------------------------------\n"
    );
  })
  .catch((err) => {
    console.log(err);
  });
