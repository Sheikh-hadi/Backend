import mongoose, { Schema } from "mongoose";

// Define a sub-schema for the style properties

// Define a sub-schema for each card in the homePackagescards array
const aboutCardSchema = new Schema({
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

const introSchema = new Schema({
  introHeading: { // Fixed typo in "introHeading"
    type: String,
    required: true,
  },
  introTextFirst: { // Capitalized "First" for consistency
    type: String,
    required: true,
  },
  introTextSecond: {
    type: String,
    required: true,
  },
});

const textCenteredSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descriptionFirst: {
    type: String,
    required: true,
  },
  descriptionSecond: {
    type: String,
    required: true,
  },
  accordianModelLeft: [accordianLeftSchema],
  accordianModelRight: [accordianRightSchema],
});

// Main schema containing homePackagescards
const aboutSchema = new Schema({
  intro: introSchema, // Applied introSchema as sub-schema
  aboutHomeCards: [aboutCardSchema],
  textCentered: textCenteredSchema, // Applied textCenteredSchema as sub-schema
});

export const About = mongoose.model("About", aboutSchema);
