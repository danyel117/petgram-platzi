import { PrismaClient } from '@prisma/client';
import { verifyToken } from 'middleware/utils';
const prisma = new PrismaClient();

const Posts = async (req, res) => {
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