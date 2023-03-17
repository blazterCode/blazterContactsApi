'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String, unique: true, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('contacts', schema);
