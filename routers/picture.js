// Vamos criar o poste para direcionar para controller 
// Aqui vamos chamar o servidor, chamando o express

const express = require("express");
const router = express.Router();

const upload = require("../config/muter");

const PictureController = require("../controllers/PictureControllers");
const Picture = require("../models/Picture");

//Com o post ele acha a rota no controller para rodar
router.post("/", upload.single("file"), PictureController.create);

// Fazer um get para trazer todas as fotos

exports.finAll = async (req, res) => {
    try{
        const pictures = await Picture.find();

        res.json(pictures);
    } catch (error) {
        req.status(500).json({ message: "Erro ao buscar! "});
    }
};