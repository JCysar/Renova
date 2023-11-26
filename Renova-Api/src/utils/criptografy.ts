import { hash, compare } from 'bcrypt'

export const encrypt = (password: string) => {
  const encryptedPassword = hash(password, 10)
  return encryptedPassword
}

export const comparePasswordEncrypted = (
  password: string,
  encryptedPassword: string
) => {
  const isValid = compare(password, encryptedPassword)
  return isValid
}
