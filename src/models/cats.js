const mongoose = require("mongoose");

const Cats = mongoose.Schema({
  race: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  origin: {
    type: String,
  },
});


exports.Cats = mongoose.model("Cats", Cats)