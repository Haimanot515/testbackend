// controllers/userController.js

// Example: simple CRUD controller
const users = [];

// Get all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// Create a new user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Get user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};