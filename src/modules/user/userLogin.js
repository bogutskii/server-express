import User from '../user/Model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from '../core/config.js';

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

export default function userLogin(req, res) {
  const { password, username } = req.body;
  console.log(username);
  User.findOne({ username })
    .then((result) => {
      const validPassword = bcrypt.compareSync(password, result.password);
      // if (!user) {
      //   return res.status(400).json({ message: `User ${username} not found` });
      // } else
      if (!validPassword) {
        res.status(400).json({ message: 'Wrong password' });
      }
      // else {
      const token = generateAccessToken(result.id, (result.roles = 'user'));

      res.status(200).json({ token });
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: 'Login error' });
    });
}
