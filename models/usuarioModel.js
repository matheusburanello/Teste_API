const mongoose = require("mongoose");

// Define o esquema (estrutura) do Usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nome Obrigatório"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email Obrigatório"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Senha Obrigatória"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Cria o modelo User baseado no esquema
const User = mongoose.model("User", userSchema);

// Exporta o modelo para usar em outros arquivos.
module.exports = User;
