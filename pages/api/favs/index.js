import {PrismaClient} from '@prisma/client'
import { verifyToken } from 'middleware/utils';
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
        console.log(likes.map((e) => e.id),favs);
        return res.status(200).json({ favs });
    }
}

export default Favs;