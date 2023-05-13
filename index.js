const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const bagData = require('./bagmons.json')

app.get('/bagDex', (req, res) => {
    res.json(bagData);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

