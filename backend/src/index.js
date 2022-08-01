// Basic Server
const fastify = require("fastify")({ logger: true });
// Logger is to know the petitions that comming from the server
const cats_routes = require("./routes/cats_routes");

// CORs
const cors = require("@fastify/cors");
fastify.register(cors, {});

// Conect this server to database
require("./utilities/database");

// Call the routes
cats_routes.map((route) => {
  fastify.route(route);
});

// Middlewears

// Call the server
const port = process.env.PORT || 3000;
const start = async () => {
  await fastify.listen({ port });
  fastify.log.info(`Server working on port ${port}`);
};

// Execute and listen the server

start();
