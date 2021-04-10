import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  roles: [{ type: String, ref: 'Role' }],
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

userSchema.index({ email: 1 }, { unique: true }); //unique user id in db

export default mongoose.model('User', userSchema);
