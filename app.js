const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      firstName TEXT,
      lastName TEXT,
      email TEXT,
      department TEXT
    )`);
  }
});

app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/users', (req, res) => {
  const { firstName, lastName, email, department } = req.body;
  if (!firstName || !lastName || !email || !department) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const id = uuidv4();
  const sql = 'INSERT INTO users (id, firstName, lastName, email, department) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [id, firstName, lastName, email, department], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id, firstName, lastName, email, department });
  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, department } = req.body;
  const sql = 'UPDATE users SET firstName = ?, lastName = ?, email = ?, department = ? WHERE id = ?';
  db.run(sql, [firstName, lastName, email, department, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id, firstName, lastName, email, department });
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 5000');
});
