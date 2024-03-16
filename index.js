const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Hardcoded user data
let users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  { id: 3, username: 'user3', password: 'password3' }
];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
  const { username, password } = req.body;
  const id = users.length + 1;
  const newUser = { id, username, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { username, password } = req.body;
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = { id, username, password };
  res.json(users[userIndex]);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});