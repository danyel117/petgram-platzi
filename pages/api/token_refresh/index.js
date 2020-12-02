import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_KEY;

function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken.split(' ')[1], SECRET_KEY);
  } catch (e) {
    return null;
  }
}

const Refresh = async (req, res) => {
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
