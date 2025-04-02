// Mongoose é uma biblioteca que modela o arquivo para Json para interação com o banco de dados
// Importa para interagir com o banco de dados
const mongoose = require("mongoose");

// Carrega variáveis de ambiente do arquivo .ENV
require("dotenv").config();

// Configura o mongoose para permitir consulta (Restritas)
mongoose.set("strictQuery", true);

//Credenciais
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Função (Assincrona) para conectar com o BD 
async function main() {
    // await para esperar a conexão em torno de 15 segundos
    await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}
        @cluster0.pqyc5.mongodb.net/?retryWrites=true&w=majority&appName=
        Cluster0`
    );

    // Exibe a mensagem ao úsuário que realizou a conexão
    console.log("Conectou ao banco de dados!");
}

// Caso ocorra erro mostra uma mensagem 
main().catch((err) => console.log(err));

// Exportar a função para utilizar em outro arquivo
module.exports = main;