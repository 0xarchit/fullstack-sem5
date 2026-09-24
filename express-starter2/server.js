import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] | ${req.method} | ${req.url} | ${req.ip}`);
  next()
}

function allowed(req, res, next) {
  const allowed = req.query.allowed === 'true';
  if(!allowed) {
    return res.status(403).json({ message: 'Not allowed' });
  }
  next();
}

app.use(logger)

const users = new Map();

const getAllUsers = (req, res) => {
  const userList = Array.from(users.values());
  res.status(200).json(userList);
};

const createNewUser = (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const id = users.size + 1;
  const newUser = { id, name, email };

  users.set(id, newUser);
  console.log(users);
  res.status(201).json(newUser);
};

app.get('/users', allowed, getAllUsers);
app.post('/users', createNewUser);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
