const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
