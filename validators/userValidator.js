// Importando Joi para validações
const Joi = require("joi");

// Schema de validação para registro de usuário(POST)

const registerSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      "string.empty": "Nome Obrigatório",
      "any.required": "O nome é obrigatório",
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "O email é obrigatório",
        "string.email": "Email inválido",
        "any.required": "O email é obrigatório",
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "A senha é obrigatória",
        "string.min": "A senha deve ter no mínimo 6 caracteres",
        "any.required": "A senha é obrigatória",
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        "string.ampty": "A confirmação de senha é obrigatória",
        'any.only': "As senhas não conferem",
        "any.required": "A confirmação de senha é obrigatória",
    }),
});

// Schema de validação para o login de usuário(GET)
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty": "O email é obrigatório",
        "string.email": "Email inválido",
        "any.required": "O email é obrigatório",
}),
password: Joi.string().min(6).required().messages({
    "string.empty": "A senha é obrigatória",
    "string.min": "A senha deve ter no mínimo 6 caracteres",
    "any.required": "A senha é obrigatória",
    }),
});

// Expostando os Schema para ser usados na validação das rotas.
module.exports = {
    registerSchema,
    loginSchema,
};