// Esse arquivo pega as pastas para comunicação com as outras pastas

// Envia a imagem
const multer = require("multer");

// Acha a pasta, localiza
const path = require("path");

const storage = multer.diskStorege({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cd){
        cd(null, Date.now() = path.extrname(file.originalname));
    },
});

const upload = multer({ storage });

// Exportação do upload para muter
module.exports = upload; //