import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const ApiCategories = async (req,res) => {
    if (req.method === 'GET') {
        const categorias = await prisma.category.findMany();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(categorias));
    } 
}
 
export default ApiCategories;


