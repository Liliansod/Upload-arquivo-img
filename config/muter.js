// Esse arquivo pega as pastas para comunicação com as outras pastas

// Envia a imagem
// Importando para uploads de arquivos
const multer = require("multer");

// Acha a pasta, localiza
// Importa o path para manipularção de camihos de arquivos (Windows)
const path = require("path");

// Configura o armzenamento dos arquivos com Multer
const storage = multer.diskStorege({
    // Função para definir o diretório dos arquivos (Localização)
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    // Função para definir o nome do arquivo
    filename: function (req, file, cd){
        // Define o nome do arquivo com a data e Extensão original do arquivo
        cd(null, Date.now() + path.extrname(file.originalname));
    },
});

// Configurando o middleware de Upload 
const upload = multer({ storage });

// Exportação do upload para muter
module.exports = upload; 