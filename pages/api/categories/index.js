import { PrismaClient } from '@prisma/client';
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

const ApiCategories = async (req,res) => {
    await cors(req, res);
    if (req.method === 'GET') {
        const categorias = await prisma.category.findMany();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(categorias));
    } 
}
 
export default ApiCategories;


