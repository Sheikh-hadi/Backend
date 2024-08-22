import mongoose, { model, Schema } from "mongoose";

const BoxesSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
const tiktokFollowerSchema = Schema({
  pricing: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    boxes: [BoxesSchema],
  },
});

export const TiktokFollower = mongoose.Model(
  "TiktokFollower",
  tiktokFollowerSchema
);
