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
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User not created');
    });
  //  .finally(()={ console.log('end')})
}
