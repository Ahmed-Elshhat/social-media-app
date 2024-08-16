// swagger.js - File responsible for setting up Swagger
const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "My REST API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  // Point this to your user routes file or adjust accordingly
  apis: [path.join(__dirname, "src", "users", "usersRoutes.js")], // Update this path as needed
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
