import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken } from 'middleware/utils';
const prisma = new PrismaClient();
const KEY = process.env.JWT_KEY;



const ApiUser = async (req,res) => {
    if (req.method === 'GET') {
        const token = req.headers.authorization
        const decode=verifyToken(token);
        if(!decode){
            return res.status(401).json({status:"error",error:"No autorizado"})
        }
        const usuario = await prisma.user.findUnique({
            where:{
                email:decode.email
            }
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(usuario));
    }
    
    if(req.method==='POST'){
        // await runMiddleware(req, res, cors);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const hash = await bcrypt.hash(req.body.password, 10);
        const createdUser = await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                password:hash
            }
        })
        const payload = {
            id: createdUser.id,
            email: createdUser.email,
        };
        /* Sign token */
        jwt.sign(
            payload,
            KEY,
            {
            expiresIn: 3600, // 1 year in seconds
            },
            (err, token) => {
            /* Send succes with token */
            return res.status(200).json({
                token: token,
            });
            }
        );
    }
}

export default ApiUser;
