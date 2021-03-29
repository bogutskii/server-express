import mongoose from 'mongoose';
function dbConnect() {
  //mongoose.connect('mongodb://localhost/express', {
  mongoose.connect(
    'mongodb+srv://admin:dESz9V4dkfElmhb1@cluster0.s26jz.mongodb.net/mongo-express-server?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('CONNECTED');
  });
}

export default dbConnect;
