import { Request, Response } from 'express'
import { encrypt } from '../utils/criptografy.js'
import { News, createNew, createUser, findNewById, findUserByEmail, findUserById, login } from '../repositories/user.js'
import { createToken } from '../utils/token.js'

export interface User {
  id?: string
  email?: string
  name?: string
  password?: string
}
export const singUp = async (req: Request, res: Response) => {
  const { email, name, password }: User = req.body

  const encriptedPassword = await encrypt(password)

  const user: User = {
    email,
    name,
    password: encriptedPassword
  }

  try {

    const existEmail = await findUserByEmail(email)
    if (existEmail)
      return res.status(401).json({mensagem: "Email já cadastrado!" })

    await createUser(user)

    return res.status(200).json()
  } catch (error) {

    res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

export const signIn = async (req: Request, res: Response) => {

  const { email, password} = req.body

  try {
    const acount: User = await findUserByEmail(email, {
      id: true,
      password: true
    });
    if(!acount)
      return res.status(401).json({mensagem: "Usuario ou senha incorreta" })


    const {password: encriptedPassword, id}  = acount
    const loginAcount = await login(email, password, encriptedPassword)


    if(!loginAcount)
      return res.status(401).json({mensagem: "Usuario ou senha incorreta" })

    const token = createToken(id)

    return res.status(200).json({mensagem: "Login efetuado com sucesso!", token})

  } catch (error) {
    
    res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

interface ExtendedRequest extends Request {
  id: string;
}

export const alreadyIn = async (req: ExtendedRequest, res: Response) => {
  try {
    const user = await findUserById(req.id)
    res.json(user)

  } catch (error) {
    res.status(500).json({mensagem: "Erro interno do servidor"})
  }
}


interface New {
  title: string
  text: string
  image: string
  authorId: string
}

export const contentNew = async (req: ExtendedRequest, res: Response) => {
  const {title, image, text} = req.body

  const NewObject: New = {
    title,
    text,
    image,
    authorId: req.id
  }
  try {
    const result = await createNew(NewObject)
    

    if(!result)
      return res.status(400).json({mensagem: "Erro na criação da noticia"})

    return res.status(200).json()
  } catch (error) {
    
    res.status(500).json({mensagem: "Erro interno do servidor"})
    
  }


}


export const getNews = async (req: Request, res: Response) => {
  
  try {
    const result = await News()
    if(!result)
      return res.status(400).json({mensagem: "Erro na busca da noticia"})

    
    return res.status(200).json(result)

  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({mensagem: "Erro interno do servidor"})
    
  }
}


export const getNewParams = async (req: Request, res: Response) => {
  const { id  } = req.params
  
  try {
    const result =  await findNewById(id)
    if(!result)
      return res.status(400).json({mensagem: "Erro na busca da noticia"})

    
    return res.status(200).json(result)

  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({mensagem: "Erro interno do servidor"})
    
  }
}