import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {errorMiddleware} from '../../../packages/error-handler/error-middleware';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

const app = express();

app.use(errorMiddleware);
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});


// app.listen(port, host, () => {
//   console.log(`[ ready ] http://${host}:${port}`);
// });


const server = app.listen(port, host, () => {
  console.log(`[ ready ] Auth service: http://${host}:${port}/api`);
}
);
server.on('error', (err) => {
  console.error(err);
});