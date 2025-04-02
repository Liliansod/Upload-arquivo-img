// Express para criar o servidor e definir rotas
const express = require("express");

// Crio uma instância do Express
const app = express();

// Carrega variáveis de ambiente
require("dotenv").config();

// Estabelece a conexão com o DB, feito pelo DB.js
require("./db");

// Define a porta do servidor (.ENV ou 3000)
const port = process.env.PORT || 3000;

// Harmazena as rotas na variável
// Importa o roteador de img. para utilizar as rotas
const pictureRouter = require("./routers/picture");

// Define que todas rotas começam com pictures
// Será tratada os envios (GET, POST e ETC), pelo pictureRouter
// http://localhost:4000/pictures
app.use("/pictures", pictureRouter);

// Inicia o servidor
app.listen(port, () => {
    console.log(`O servidor executa na porta ${port}`);
});