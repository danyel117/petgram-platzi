import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import Cors from 'cors';
import initMiddleware from 'lib/init-middleware';

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

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

const prisma = new PrismaClient();



const Posts = async (req, res) => {
  await cors(req, res);
  if (req.method === 'GET') {
    const token = req.headers.authorization;
    const {
        query: { id },
      } = req;

    const decode = verifyToken(token);
    if (!decode) {
      return res.status(401).json({ status: 'error', error: 'No autorizado' });
    }
    const posts = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({ posts });
    }
}


export default Posts;