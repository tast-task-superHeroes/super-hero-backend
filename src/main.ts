'use strict';

// import Heroes from './models/super_hero';
import express from 'express';
import { initDb } from './utils/db';
import cors from 'cors';
import { router }  from './routes/super_hero';


const PORT = process.env || 4152;
const app = express();

app.use(cors())
app.use(express.json());
app.use('/heroes', router)

initDb();

app.listen({port: PORT})
