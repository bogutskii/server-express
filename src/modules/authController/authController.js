import User from './Model';
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'

export default function authController(req, res) {
  const newUser = new User({
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