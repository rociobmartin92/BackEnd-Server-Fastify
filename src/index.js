// Basic Server

const fastify = require("fastify")({ logger: true });
// Logger is to know the petitions that comming from the server


const cats_routes = require("./routes/cats_routes");

// Conect this server to database

require("./utilities/database");

// Call the routes
cats_routes.map((route) => {
  fastify.route(route);
});


// Call the server
const port = process.env.PORT || 3000;
const start = async () => {
  await fastify.listen({ port });
  fastify.log.info(`Server working on port ${port}`);
};

// Execute and listen the server

start();
