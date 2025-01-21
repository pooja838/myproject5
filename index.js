// index.js

const express = require('express');
const app = express();
const port = 3560;

// Simple API endpoint//
app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Node.js API.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
