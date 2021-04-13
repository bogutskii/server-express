import User from '../user/Model';
import Role from '../user/Model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { secret } from '../core/config.js';

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

export default function userRegister(req, res) {
  const errors = validationResult(req);
  const { password, username, email } = req.body;
  const hashPassword = bcrypt.hashSync(password, 7);
  if (errors.isEmpty()) {
    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });
    newUser
      .save()
      .then(() => {
        res.status(200).json('User created');
      })
      .catch((err) => {
        res.status(400).json('User NOT registered');
      });
  } else {
    return res.status(400).json({ message: 'User registered error', errors });
  }
}
