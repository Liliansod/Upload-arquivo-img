// Ele chama o banco mongo e passa as informações das variáveis que são do tipo string
// Esse é um exporte que será utilizado em outro arquivo
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    name: { type: String, required: true},
    src: { type: String, required: true},
});

module.exports = mongoose.model("Picture", PictureSchema);
