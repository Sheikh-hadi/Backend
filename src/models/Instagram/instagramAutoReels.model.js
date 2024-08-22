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

const instgramAutoReelsSchema = new Schema({
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
  fourCard: [packageCardSchema],
});

export const InstrgamAutoReels = model(
  "InstrgamAutoReels",
  instgramAutoReelsSchema
);
