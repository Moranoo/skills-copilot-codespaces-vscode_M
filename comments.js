// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a list of comments
const comments = [];
// Create a counter
let counter = 1;

// Create a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: counter++,
    body: req.body.body
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});
