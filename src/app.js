import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { setError } from './helpers/utils';
import { connectDB } from './database.js';
import Contact from './routes/Contacts';

const app = express();

connectDB();

app.set('port', process.env.PORT || 3001);

app.use(morgan('dev'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(
  cors({
    origin: (_origin, calback) => calback(null, true),
    credentials: true
  })
);

app.use(Contact);

app.use('*', (_req, _res, next) => {
  return next(setError(404, 'Route not found'));
});

app.use((error, _req, res, _next) => {
  return res
    .status(error.code || 500)
    .json(error.message || 'Unexpected error');
});

app.disable('x-powered-by');

export default app;
