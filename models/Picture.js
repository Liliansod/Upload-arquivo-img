const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  name: { type: String, required: true },
  Image: { type: String, required: true },
  // Campo de armazena o tipo de conteúdo da imagem
  contentType: { type: String, required: true},
});

module.exports = mongoose.model("Picture", PictureSchema);
