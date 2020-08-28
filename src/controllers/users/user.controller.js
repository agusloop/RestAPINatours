const getAllUsers = (req, res) => {
  res.status(200).json({ message: "All users🐱‍🏍" });
};
const getUserByID = (req, res) => {
  res.status(200).json({ message: "Get a Users by ID🐱‍🏍" });
};
const createUser = (req, res) => {
  res.status(200).json({ message: "Create user 🐱‍🏍" });
};
const updateUser = (req, res) => {
  res.status(200).json({ message: "Update user 🐱‍🏍" });
};
const deleteUser = (req, res) => {
  res.status(200).json({ message: "Delete user 🐱‍🏍" });
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
