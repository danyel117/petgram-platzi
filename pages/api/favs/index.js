import {PrismaClient} from '@prisma/client'

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_KEY;

/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */
function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken.split(' ')[1], SECRET_KEY);
  } catch (e) {
    return null;
  }
}

const prisma = new PrismaClient()


const Favs = async (req,res) =>{
    if (req.method === 'GET') {
        const token = req.headers.authorization;
        const decode = verifyToken(token);
        if (!decode) {
          return res.status(401).json({ status: 'error', error: 'No autorizado' });
        }
        const usuario = await prisma.user.findUnique({
            where: {
            email: decode.email,
            },
        });
        const likes = await prisma.like.findMany({
            where:{
                userId:usuario.id
            }
        })
        const favs = await prisma.post.findMany({
          where: {
            id: {
              in: likes.map((e) => e.postId),
            },
          },
        });
        return res.status(200).json({ favs });
    }
}

export default Favs;