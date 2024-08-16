const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./middleware/errorHandler"); // Adjust the path to your global error handler
var cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Define routes
const usersRoutes = require("./src/users/usersRoutes.js");

app.use("/api/v1/users", usersRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
