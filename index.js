const config = require("./utils/config.js");
const mongoose = require("mongoose");
const app = require("./app.js");

mongoose
  .connect(config.URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.PORT, () => {
      console.log(`Server running on ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error Connecting to MongoDB", error);
  });