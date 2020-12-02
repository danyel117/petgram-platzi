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

const SECRET_KEY = process.env.JWT_KEY;

function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken.split(' ')[1], SECRET_KEY);
  } catch (e) {
    return null;
  }
}

const Refresh = async (req, res) => {
  await cors(req, res);
  if (req.method === 'POST') {
    const token = req.headers.authorization;
    console.log(token)
    const decode = verifyToken(token);
    console.log(decode)
    if (!decode) {
            return res.status(401).json({ status: 'error', error: 'No autorizado' });
        }

        /* Create JWT Payload */
    const payload = {
            id: decode.id,
            email: decode.email,
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
        })
    };
}

export default Refresh;
