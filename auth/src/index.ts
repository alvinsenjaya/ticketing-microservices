import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

const start = async () => {
  if(!process.env.JWT_KEY){
    throw new Error('JWT_KEY must be defined');
  }
  if(!process.env.COOKIE_SIGNING_KEY){
    throw new Error('COOKIE_SIGNING_KEY must be defined');
  }
  if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }

  app.listen(3001, () => {
    console.log('Listening on port 3001');
  });
};

start();
