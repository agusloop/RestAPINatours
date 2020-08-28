const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../../controllers/users/user.controller");

const userRouter = express.Router();

// ==================================================
// User Router otra forma más compacta de hacer rutas
// ==================================================
userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUserByID).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
