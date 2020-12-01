import { PrismaClient } from '@prisma/client';
import { verifyToken } from 'middleware/utils';
const prisma = new PrismaClient();

const Posts = async (req, res) => {
  if (req.method === 'GET') {
    const token = req.headers.authorization;
    const { post } = req.body;
      const {
        query: { type },
      } = req;
    const decode = verifyToken(token);
    if (!decode) {
      return res.status(401).json({ status: 'error', error: 'No autorizado' });
    }
    const posts = await prisma.post.findMany({
        where:
            {
                categoryId:parseInt(type)
            }
        }
    );
    const likes = await prisma.like.findMany();
    const usuario = await prisma.user.findUnique({
      where: {
        email: decode.email,
      },
    });
    console.log(posts, likes);
    return res.status(200).json({ posts, likes, usuario });
  }
};

export default Posts;
