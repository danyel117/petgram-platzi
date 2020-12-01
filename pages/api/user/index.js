import { PrismaClient } from '@prisma/client';
// import Cors from 'cors';
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

// const cors = Cors({
//   methods: ['GET', 'POST'],
// });

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }

//       return resolve(result);
//     });
//   });
// }


const ApiUser = async (req,res) => {
    if (req.method === 'GET') {
        await runMiddleware(req, res, cors);
        const usuarios = await prisma.user.findMany();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(usuarios));
    }
    
    if(req.method==='POST'){
        // await runMiddleware(req, res, cors);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const hash = await bcrypt.hash(req.body.password, 10);
        const compare = await bcrypt.compare(req.body.password, hash);
        const createdUser = await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                password:hash
            }
        })
        res.end(JSON.stringify(createdUser));
    }
}

export default ApiUser;
