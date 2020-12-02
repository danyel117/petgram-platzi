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


const ToggleLike = async (req,res) =>{
    if (req.method === 'POST') {
            const token = req.headers.authorization
            const {post} = req.body
            const decode=verifyToken(token);
            if(!decode){
                return res.status(401).json({status:"error",error:"No autorizado"})
            }
            const usuario = await prisma.user.findUnique({
                where: {
                email: decode.email,
                },
                include:{
                  Favs:{
                    where:{
                      postId:parseInt(post)
                    }
                  }
                }
            });
            if(usuario.Favs.length===0){
                await prisma.favs.create({
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
                await prisma.favs.delete({
                    where:{
                        id:usuario.Favs[0].id
                    }
                })
            }
            const likesU = await prisma.favs.findMany()
            return res.status(200).json(likesU);
    }
}

export default ToggleLike