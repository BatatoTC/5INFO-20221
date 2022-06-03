const express = require("express");
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(porta, () => {
    console.log("Servidor rodando na porta 3000.");
});