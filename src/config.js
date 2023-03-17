import { config as dotenv } from 'dotenv';
dotenv();

export const config = {
  host: process.env.MONGO_URL
};
