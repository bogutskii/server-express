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

  //const user = User.findById({username});

  // if (!user) {
  //   return res.status(400).json({message: `User ${username} not found`})
  // }
  // const validPassword = bcrypt.compareSync(password, user.password)
  //
  // if (!validPassword) {
  //   return res.status(400).json({message: `Wrong password`})
  // }
  // const token = generateAccessToken(user._id, user.roles)
  // return res.json({token})

  User.findById({ username })
    .exec()
    .then((result) => {
      const validPassword = bcrypt.compareSync(password, result.password);

      if (!validPassword) {
        res.status(400).json({ message: 'Wrong password' });
      } else {
        res.status(200).json(generateAccessToken(result._id, result.roles));
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: 'Login error' });
    });
}
