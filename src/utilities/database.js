const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mydatabase")
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log("Error Data Base connection:", e));
