import mongoose, { model, Schema } from "mongoose";

const BoxesSchema = new Schema({
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

const instgramAutoLikesSchema = new Schema({
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

export const InstrgamAutoLikes = model(
  "InstrgamAutoLikes",
  instgramAutoLikesSchema
);
