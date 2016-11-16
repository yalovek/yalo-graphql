import mongoose, { Schema } from 'mongoose';

export default mongoose.model('Page', new Schema({
  name: String,
  title: String,
  description: String,
  components: [
    {
      name: String,
      data: String,
    },
  ],
}));
