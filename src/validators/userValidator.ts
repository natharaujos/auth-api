import Joi from "joi";

const getUserDetailsSchema = Joi.object({
  userId: Joi.number().required().messages({
    "any.required": "O id do usuário é obrigatório.",
  }),
});

export { getUserDetailsSchema };
