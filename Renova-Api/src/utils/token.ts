import jwt from 'jsonwebtoken'
import {configDotenv } from 'dotenv'
configDotenv()

export const createToken = (id: string) => {
    const token = jwt.sign({ id: id }, process.env.TOKEN_PASSWORD, {
        expiresIn: "2h",
    });
    return token;
};

export const verifyToken = (token: string) => {
    const decoded = jwt.verify(token, process.env.TOKEN_PASSWORD);
    return decoded;
}
