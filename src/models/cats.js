const { Schema, model } = require("mongoose");

const Cats = new Schema({
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

module.exports = model("Cats", Cats);
