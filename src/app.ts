import express, { Request, Response } from 'express';
import urlRouter from './routes/urlRoutes';

export const app = express();

// Middlewares
// Body parser middleware
app.use(express.json({ limit: '10kb' }));

app.use('/', urlRouter);
