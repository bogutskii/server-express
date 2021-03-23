import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
});

userSchema.index({ email: 1 }, { unique: true }); //unique user id in db

export default mongoose.model('User', userSchema);
