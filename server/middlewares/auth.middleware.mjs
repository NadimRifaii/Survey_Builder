import jwt from 'jsonwebtoken'
import User from '../models/user.model.mjs'
export async function authMiddleware(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]
  if (!token)
    return res.status(403).send('Forbiden')
  else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ email: decoded.email }).select('-password');
    req.user = user;
    next()
  }
}