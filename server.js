const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const staticDir = path.join(__dirname, 'responsive-cactus-website-main');

app.use(express.static(staticDir));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
