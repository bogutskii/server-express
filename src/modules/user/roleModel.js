import mongoose from 'mongoose';

const { Schema } = mongoose;

const role = new Schema({
  value: { type: String, unique: true, default: 'USER' },
});

export default mongoose.model('role', role);
