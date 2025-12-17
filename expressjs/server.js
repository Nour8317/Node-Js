const express = require('express');

const app = express();
const port = 8000;

// app.listen(800, () => {
//   console.log(`Server is running on port ${port}`);
// });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});