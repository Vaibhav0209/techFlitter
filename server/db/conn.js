const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((e) => {
    console.log("something went wrong", e);
  });
