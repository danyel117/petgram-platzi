import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
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

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_KEY;

const Auth = async (req,res) => {
    await cors(req, res);
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
            return res.status(400).json({ status: 'error', error: 'Usuario no encontrado' });
        }
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
              SECRET_KEY,
              {
                expiresIn: '1h',
              },
              (err, token) => {
                /* Send succes with token */
                return res.status(200).json({
                  token: token,
                });
              }
            );
            } else {
            /* Send error with message */
                return res.status(400).json({ status: 'error', error: 'Contraseña Incorrecta' });
            }

        })
    }
}

export default Auth;