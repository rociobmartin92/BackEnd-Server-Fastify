const fastify = require("fastify");
const catController = require("../controllers/cats_controller");

// Define the router this file contains
const routes = [
  {
    method: "GET",
    url: "/cats",
    handler: catController.getCats,
  },
  {
    method: "GET",
    url: "/cats/:id",
    handler: catController.getCat,
  },
  {
    method: "POST",
    url: "/cats",
    handler: catController.createCat,
  },
  {
    method: "DELETE",
    url: "/cats/:id",
    handler: catController.deleteCat,
  },
  {
    method: "PUT",
    url: "/cats/:id",
    handler: catController.updateCat
  },
];

module.exports = routes;
