import { prisma } from '../database/index.js';
import { comparePasswordEncrypted } from '../utils/criptografy.js';

export const createUser = async (user) => {
  try {
    const userCreated = await prisma.user.create({
      data: user,
    });

    return userCreated;
  } finally {
    await prisma.$disconnect();
  }
};

export const findUserByEmail = async (email:string, returning? :object): Promise<object> => {
  const fieldsReturning = returning
    ? returning
    : {
        id: true,
        name: true,
        email: true,
      };

  try {
    const exist = await prisma.user.findUnique({
      where: { email },
      select: fieldsReturning,
    });

    return exist;
  } finally {
    await prisma.$disconnect();
  }
};

export const login = async (email: string, password: string, encriptedPassword: string) => {
  try {

    const comparePassword = await comparePasswordEncrypted(password, encriptedPassword);

    return comparePassword;
  } finally {
    await prisma.$disconnect();
  }
};


export const findUserById = async (id: string) => {
  try{
    const user = await prisma.user.findUnique({
      where: {id: id},
      select: {
        email: true,
        name: true
      }
    })

    return user
  } finally {
    await prisma.$disconnect();
  }
}
