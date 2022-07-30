const Cats = require("../models/cats");

const getCats = async (request, reply) => {
  const getCats = await Cats.find();

  getCats
    ? reply.code(202).send(getCats)
    : reply.code(500).send("Can not get all cats");
};

const getCat = async (request, reply) => {
  const getCat = await Cats.findById(request.params.id);
  getCat
    ? reply.code(202).send(getCat)
    : reply.code(500).send("Can not get this id cat");
};

const createCat = async (request, reply) => {
  const newCat = new Cats(request.body);

  await newCat.save();
  newCat
    ? reply.code(201).send(newCat)
    : reply.code(500).send("Can not create a new cat");
};

const deleteCat = async (request, reply) => {
  const deleteId = await Cats.findByIdAndRemove(request.params.id);

  deleteId
    ? reply.code(204).send("Cat succesfully deleted")
    : reply.code(500).send("Can not delete this id cat");
};

const updateCat = async (request, reply) => {
  const updateId = await Cats.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );

  updateId
    ? reply.code(200).send("Cat succesfully update")
    : reply.code(500).send("Can not update this id cat");
};

module.exports = {
  getCats,
  getCat,
  deleteCat,
  createCat,
  updateCat,
};
