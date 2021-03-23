import User from './Model';

export default function userUpdateById(req, res) {
  const userId = req.params.userId;

  delete req.body.password;

  User.updateOne({ _id: userId }, req.body)
  // User.findByIdAndUpdate(userId, req.body)

    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User Update Error');
    });
}
