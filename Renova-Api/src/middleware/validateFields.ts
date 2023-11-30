import { Request, Response, NextFunction } from 'express'

export const validateFields =
  (joiSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await joiSchema.validateAsync(req.body)
      next()
    } catch (erro) {
      
      return res.status(400).json({ mensagem: erro.message })
    }
  }

export const validateParamId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  if (!Number(id)) {
    return res
      .status(400)
      .json({ mensagem: 'O parâmetro id deve conter apenas dígitos númericos' })
  }

  next()
}
