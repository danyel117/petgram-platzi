import { verifyToken } from 'middleware/utils';
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


const ToggleLike = async (req,res) =>{
    if (req.method === 'POST') {
            const token = req.headers.authorization
            const {post} = req.body
            const decode=verifyToken(token);
            if(!decode){
                return res.status(401).json({status:"error",error:"No autorizado"})
            }
            console.log(decode)
            const usuario = await prisma.user.findUnique({
                where: {
                email: decode.email,
                },
            });
            const likes= await prisma.like.findMany({
                where:{
                    user:usuario,
                    postId:parseInt(post)
                }
            })
            if(likes.length===0){
                await prisma.like.create({
                  data: {
                    user: {
                      connect: { id: usuario.id },
                    },
                    post: {
                      connect: { id: parseInt(post) },
                    },
                  },
                });
            }
            else{
                await prisma.like.delete({
                    where:{
                        id:likes[0].id
                    }
                })
            }
            const likesU = await prisma.like.findMany()
            return res.status(200).json(likesU);
    }
}

export default ToggleLike