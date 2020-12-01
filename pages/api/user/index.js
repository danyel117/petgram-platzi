import { PrismaClient } from '@prisma/client';
// const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

const ApiUser = async (req,res) => {
    if (req.method === 'GET') {
        const usuarios = await prisma.user.findMany();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(usuarios));
    }
    else if(req.method==='POST'){
        console.log(req.data);
    }
}

export default ApiUser;
