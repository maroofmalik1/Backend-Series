import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    content: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: mongoose.Schema.types.ObjectID,
      ref: 'user',
    },
    subtodo: [
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'subtodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.models('Todo', todoSchema);
