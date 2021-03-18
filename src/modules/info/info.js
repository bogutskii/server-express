const names = [];

export default function info(req, res) {
  names.push(req.body.name);
  res.status(200).json(names);

  // res.send('info Here ' + names);
  //JSON.stringify(obj)
  //JSON.parse(json)
}
