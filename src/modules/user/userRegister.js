import User from './Model';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
  res.status(200).json('user created');
}
