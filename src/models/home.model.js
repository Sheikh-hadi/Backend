import mongoose, { Schema } from "mongoose";

// Define a sub-schema for the style properties
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

// Define a sub-schema for icon cards
const iconCardSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

// Define a sub-schema for each card in the homePackagescards array
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
    type: styleSchema,
    required: true,
  },
});

const featuresSchema = new Schema({
  number: {
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
// Main schema containing homePackagescards
const homeSchema = new Schema({
  intro: {
    introHeading: {
      type: String,
      required: true,
    },
    introText: {
      type: String,
      required: true,
    },
    introButtonFirst: {
      type: String,
      required: true,
    },
    introButtonSecond: {
      type: String,
      required: true,
    },
    introButtonThird: {
      type: String,
      required: true,
    },
  },
  iconCardArray: [iconCardSchema], // Array of iconCardSchema objects
  threeStepProcess: {
    title: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
  },
  homePackagescards: [packageCardSchema], // Array of packageCardSchema objects
  aboutBlock: {
    description: {
      type: String,
      required: true,
    },
  },
  features : [featuresSchema]
});

export const Home = mongoose.model("Home", homeSchema);
