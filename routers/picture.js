// Vamos criar o poste para direcionar para controller 
// Aqui vamos chamar o servidor, chamando o express

// Importa o express para manipular as rotas
const express = require("express");

// Criando um arquivo de rotas pelo express
const router = express.Router();

// importando o middleware de Upload (Multer)
const upload = require("../config/muter");

// Controlador das imagens funções lógicas do app. (GET, POST e ETC...)
const PictureController = require("../controllers/PictureControllers");
const Picture = require("../models/Picture");

//Com o post ele acha a rota no controller para rodar
// Definindo a rota POST (Upload da Img a Armaz. no DB)
router.post("/", upload.single("file"), PictureController.create);

// Define a rota GET (Trazer todas as imagens do DB)
router.get("/", PictureController.findAll);

// Exportando para utilizar em outro arquivo
module.exports = router;

// Fazer um get para trazer todas as fotos
exports.finAll = async (req, res) => {
    try{
        const pictures = await Picture.find();

        res.json(pictures);
    } catch (error) {
        req.status(500).json({ message: "Erro ao buscar! "});
    }
};