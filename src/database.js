import { config } from './config';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(config.host);
    const { name, host } = db.connection;
    console.log(`conectado a mongo: ${name} ... ${host}`);
  } catch (error) {
    console.error(`error de conexcion :${error}`);
  }
};

module.exports = { connectDB };
