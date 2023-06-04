const express = require('express');
const app = express();
const port = 3000;

// This line is needed to parse the body of incoming POST requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, CodeFarm!');
});

app.get('/world-atlas', (req, res) => {
    res.send('WorldAtlas!');
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codefarm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.post('/novels', (req, res) => {
  // TODO: Add code to create a new novel
  res.send('Novel created!');
});

// Add routes for characters and chapters
app.post('/characters', (req, res) => {
  // TODO: Add code to create a new character
  res.send('Character created!');
});

app.post('/chapters', (req, res) => {
  // TODO: Add code to create a new chapter
  res.send('Chapter created!');
});
