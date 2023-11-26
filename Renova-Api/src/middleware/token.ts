import { JwtPayload } from 'jsonwebtoken'
import { verifyToken } from '../utils/token.js'

export const validatingToken = (req, res, next) => {
  interface TokenPayload extends JwtPayload {
    id: string
  }
  try {
    const { authorization } = req.headers
    if (typeof authorization === 'undefined')
      return res.status(400).json({
        mensagem:
          'Para acessar este recurso um token de autenticação válido deve ser enviado.'
      })

    const [Bearer, token] = authorization.split(' ')

    if (!Bearer || !token)
      return res.status(400).json({
        mensagem:
          'Para acessar este recurso um token de autenticação válido deve ser enviado.'
      })

    const validToken = verifyToken(token)

    if (!validToken)
      return res.status(401).json({
        mensagem:
          'Para acessar este recurso um token de autenticação válido deve ser enviado.'
      })

    const tokenPayload = validToken as TokenPayload
    req.id = tokenPayload.id
    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ mensagem: 'Token jwt expirado' })
    }
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}
