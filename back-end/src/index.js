const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send('uhul!'));

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

module.exports = app;
