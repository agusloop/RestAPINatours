const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./db");

const morgan = require("morgan");

const toursRouter = require("./src/routes/tours/tours.routes");
const userRouter = require("./src/routes/user/user.routes");
const app = express();

//Middleware config request peticion (lee los parametros sino pasan como)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

//Rutas de nuestro modelos
app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
