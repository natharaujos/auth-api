import Joi from "joi";

const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "O e-mail informado é inválido.",
    "any.required": "O campo e-mail é obrigatório."
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "A senha deve ter no mínimo 6 caracteres.",
    "any.required": "O campo senha é obrigatório."
  })
});

export {registerSchema}