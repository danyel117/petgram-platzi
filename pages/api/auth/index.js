import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const KEY = process.env.JWT_KEY;

const Auth = async (req,res) => {
    if(req.method==='POST'){
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({
            status: 'error',
            error: 'Request missing username or password',
          });
        }
        const user= await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if (!user) {
            /* Send error with message */
            return res.status(400).json({ status: 'error', error: 'User Not Found' });
        }
        console.log(user)
        await bcrypt.compare(password,user.password).then((isMatch)=>{
            if (isMatch) {
            /* Create JWT Payload */
            const payload = {
                id: user.id,
                email: user.email,
            };
            /* Sign token */
            jwt.sign(
                payload,
                KEY,
                {
                expiresIn: 31556926, // 1 year in seconds
                },
                (err, token) => {
                /* Send succes with token */
                return res.status(200).json({
                    success: true,
                    token: 'Bearer ' + token,
                });
                }
            );
            } else {
            /* Send error with message */
                return res.status(400).json({ status: 'error', error: 'Password incorrect' });
            }

        })
    }
}

export default Auth;