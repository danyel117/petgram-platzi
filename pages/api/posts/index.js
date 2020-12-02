import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

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

const Posts = async (req,res) =>{

    if (req.method === 'GET') {
        const token = req.headers.authorization;
        const { post } = req.body;
        const decode = verifyToken(token);
        if (!decode) {
          return res.status(401).json({ status: 'error', error: 'No autorizado' });
        }
        const posts = await prisma.post.findMany();
        // const likes = await prisma.like.findMany();
        // const usuario = await prisma.user.findUnique({
        //   where: {
        //     email: decode.email,
        //   },
        // });
        const likes=""
        const usuario=""
        return res.status(200).json({posts,likes,usuario});
    }

}

export default Posts;