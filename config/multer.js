// Importando para uploads de arquivos
const multer = require("multer");

// Importa o path para manipulação de caminhos de arquivos (Windows)
const path = require("path");

// Configura o Multer
const storage = multer.diskStorage({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // Limite de 5MB
  }
});

// Exporta para utilizar em outros arquivos
module.exports = upload;