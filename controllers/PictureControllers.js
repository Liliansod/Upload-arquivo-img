// Arquivo de processo principal

const Picture = require("../models/Picture");

// Importa o fs para interagir com o sistema de arquivo (Não usado o cod.)
const fs = require("fs");

// Ele entra pelo arquivo de rota e vem para controller, por que a router que escolhe a rota 
// Função para criar uma nova imagem no banco de dados
exports.create = async (req, res) => {

    try{
        // Pega a informação do nome do arquivo enviado pela requisição
        const { name } = req.body

        // Obtém o arquivo da req. (Via multer)
        const file = req.file

        // Cria uma nova instância do modelo Picture com o nome da img e caminho
        const picture = new Picture({
            name,
            src: file.path,
        })

        // Aqui envia para o banco ou seja salva a img na DB
        await picture.save();

        // Retorna a resposta com os dados da img salva
        res.json({ picture, msg: "Imagem salva com sucesso!"});
    } catch (err) {
        // Caso tenha erro durante o processo, retorna a mensagem ao usuário
        res.status(500).json({ message: "Erro ao salvar!"});
    }
};

// Função para  buscar todas img no DB
exports.findAll = async (req, res) => {
    try {
        // Busca todas img armazenadas no DB
        const picture = await Picture.find();
        // Retorna todas img encontradas em formato de JSON 
        res.json(picture);
    } catch (err) {
        // Caso haja erro durante a busca, retorna mensagem ao usuário
        res.status(500).json({ message: "Error ao buscar as imagens."});
    }
};