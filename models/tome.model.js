import mongoose from 'mongoose';

const tomeSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    letters: {
      type: Array,
      validate: {
        validator(v) {
          return v.length <= 3;
        },
        message: '편지는 3장까지 입력 가능합니다.',
      },
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    ukey: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    date: {
      type: String,
    },
  },
  { collection: 'xxit-test' },
);

export default mongoose.model('tomeSchema', tomeSchema);
