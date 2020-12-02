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
        const posts = await prisma.post.findMany({
          include:{
            Favs:{
              include:{
                user:true
              }
            }
          }
        });
        const liked = posts.map(pst=>({id:pst.id,liked:pst.Favs.filter(fv=>fv.user.id===decode.id).length>0}))
        return res.status(200).json({posts,liked});
    }

}

export default Posts;