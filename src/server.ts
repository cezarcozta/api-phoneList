import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import 'express-async-errors';
import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.log("Back-end ONLINE on 3333");
});
