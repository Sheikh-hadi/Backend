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

const styleSchema = new Schema({
  background: {
    backgroundColor: { type: String, required: true },
  },
  heading1: {
    fontSize: { type: String, required: true },
    color: { type: String, required: true },
    margin: { type: String, required: true },
  },
  heading2: {
    fontSize: { type: String, required: true },
    color: { type: String, required: true },
    margin: { type: String, required: true },
  },
  description: {
    margin: { type: String, required: true },
    color: { type: String, required: true },
    fontSize: { type: String, required: true },
  },
  icon: {
    fontSize: { type: String, required: true },
    color: { type: String, required: true },
  },
});

const packageCardSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  style: {
    type: styleSchema, // Not an array, but an object
    required: true,
  },
});

const imageContentBlockSecondSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const accordianLeftSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const accordianRightSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const instgramLikesSchema = new Schema({
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
  firstText: {
    heading: { type: String, required: true },
    para: { type: String, required: true },
  },
  threeCard: [packageCardSchema],
  secondText: {
    button: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true },
      para: {
        type: String,
        required: true },
    },
  imageContentBlockSecond: [imageContentBlockSecondSchema],
  faq: {
    button: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
  },
  accordianModelLeft: [accordianLeftSchema],
  accordianModelRight: [accordianRightSchema],
});

export const InstrgamLikes = model("InstrgamLikes", instgramLikesSchema);
