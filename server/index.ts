import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
require('dotenv/config');

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3333, () => console.log('Server up and running :)'));
