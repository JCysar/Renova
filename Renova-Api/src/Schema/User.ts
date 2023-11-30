import Joi from 'joi'

export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'O campo email é obrigatório',
        'string.base': 'E-mail inválido',
        'string.email': 'E-mail inválido',
        'string.empty': 'E-mail não preenchido'

    }),
    password: Joi.string().min(5).max(12).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.base': 'A senha deve conter caracteres válidos',
        'string.min': 'A senha deve conter no mínimo 5 caracteres',
        'string.max': 'A senha deve conter no máximo 15 caracteres',
        'string.empty': 'Senha não preenchido'

    }),
})

export const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
      'any.required': 'O campo email é obrigatório',
      'string.base': 'E-mail inválido',
      'string.email': 'E-mail inválido',
      'string.empty': 'E-mail não preenchido'
  }),
  password: Joi.string().min(5).max(15).required().messages({
      'any.required': 'O campo senha é obrigatório',
      'string.base': 'A senha deve conter caracteres válidos',
      'string.min': 'A senha deve conter no mínimo 5 caracteres',
      'string.max': 'A senha deve conter no máximo 15 caracteres',
      'string.empty': 'Senha não preenchido'

  }),
  name: Joi.string().min(5).max(50).required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.base': 'O nome deve conter caracteres válidos',
    'string.min': 'O nome deve conter no mínimo 5 caracteres',
    'string.max': 'O nome deve conter no máximo 50 caracteres',
    'string.empty': 'Nome não preenchido'

}),
})
